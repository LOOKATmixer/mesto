export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.closeButton = this._popup.querySelector('.popup__close-button');
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _closeByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
      this.close();
    }
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this.closeButton.addEventListener('click', this.close.bind(this));
    this._popup.addEventListener('click', this._closeByOverlay.bind(this));
  }
}