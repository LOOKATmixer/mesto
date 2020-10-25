import FormValidator from "./FormValidator.js";

// Массив карточек
export const initialCards = [
  {
    name: "Архыз",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Объект с элементами форм
export const validationParams = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

export const cardId = "#card";

//popupProfile и внутренности
export const formProfile = document.forms.formProfile;
export const formProfileValidator = new FormValidator(
  validationParams,
  formProfile
);
export const popupProfile = document.querySelector(".popup_type_profile");
export const inputName = formProfile.elements.nameProfile;
export const inputAbout = formProfile.elements.aboutProfile;

//popupCard и внутренности
export const formPlace = document.forms.formPlace;
export const formPlaceValidator = new FormValidator(
  validationParams,
  formPlace
);
export const popupCard = document.querySelector(".popup_type_card");
export const cardNameInput = formPlace.elements.namePlace;
export const cardImageUrl = formPlace.elements.aboutPlace;

//buttons
export const editButton = document.querySelector(".profile__edit-button");
export const cardButton = document.querySelector(".profile__button");
export const profileCloseButton = popupProfile.querySelector(
  ".popup__close-button"
);
export const cardCloseButton = popupCard.querySelector(".popup__close-button");
export const imageSaveButton = popupCard.querySelector(".popup__save-button");
export const profileSaveButton = popupProfile.querySelector(
  ".popup__save-button"
);

//____
export const profileName = document.querySelector(".profile__info-title");
export const profileAbout = document.querySelector(".profile__description");

export const cardListSelector = ".elements__list";

export const popups = Array.from(document.querySelectorAll(".popup"));
