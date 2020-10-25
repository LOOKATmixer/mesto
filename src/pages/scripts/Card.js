export default class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
    this._handleLikeIcon = this._handleLikeIcon.bind(this);
  }

  // Приватный метод клонирования карточки
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  // Публичный метод который, который возвращает наполненный данными элемент карточки.
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".element__image");
    const cardTitle = this._element.querySelector(".element__content-text");

    cardTitle.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._alt;

    return this._element;
  }

  // Приватный метод лайка карточки
  _handleLikeIcon() {
    this._element
      .querySelector(".element__content-like")
      .classList.toggle("element__content-like_active");
  }

  // Приватный метод удаления карточки
  _handleDeleteClick() {
    this._element.remove();
  }

  // Приватный метод слушателей событий
  _setEventListeners() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });
    this._element
      .querySelector(".element__content-like")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._element
      .querySelector(".element__content-basket")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });
  }
}
