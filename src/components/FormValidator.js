// Класс, который настраивает валидацию полей формы
export default class FormValidator {
    constructor(validationParams, formElement) {
        this._formElement = formElement;
        this._formSelector = validationParams.formSelector;
        this._inputSelector = validationParams.inputSelector;
        this._submitButtonSelector = validationParams.submitButtonSelector;
        this._inactiveButtonClass = validationParams.inactiveButtonClass;
        this._inputErrorClass = validationParams.inputErrorClass;
        this._errorClass = validationParams.errorClass;
    }

    // Приватный метод невалидного состояния полей
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    // Приватный метод валидного состояния полей
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }

    // Приватный метод проверки состояния полей
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    // Приватный метод обработки input'a на каждое поле 
    _setEventListeners() {
        const inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
        this._submitButton(inputs, buttonSubmit);
        inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._submitButton(inputs, buttonSubmit);
            });
        });
    }

    _submitButton(inputs, buttonSubmit) {
        if (this._hasInvalidInput(inputs)) {
            buttonSubmit.classList.add(this._inactiveButtonClass);
            buttonSubmit.disabled = true;
        } else {
            buttonSubmit.classList.remove(this._inactiveButtonClass);
            buttonSubmit.disabled = false;
        }
    }

    // Приватный метод проверки на валидное заполнение
    _hasInvalidInput(inputs) {
        return inputs.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    // Публичный метод валидации для всех форм
    enableValidation() {
        this._formElement.addEventListener('sumbit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
        }


};





  
