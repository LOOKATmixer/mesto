import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._handleSubmit = this._popup.querySelector(".form");
  }

  handleSubmit(handleSubmitForm) {
    this._handleSubmitForm = handleSubmitForm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._handleSubmit.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitForm();
    });
  }
}
