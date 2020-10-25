import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupTitle = this._popup.querySelector(".popup__title_image");
  }

  open(link, name) {
    super.open();
    const image = this._popupImage;
    const title = this._popupTitle;
    image.src = link;
    image.alt = name;
    title.textContent = name;
  }
}
