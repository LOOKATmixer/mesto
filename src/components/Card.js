export default class Card {
  constructor(
    { name, link, likes, owner, handleCardClick, cardDelete, elementLike },
    id,
    cardId,
    cardSelector
  ) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._owner = owner._id;
    this._id = id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._cardDelete = cardDelete;
    this._elementLike = elementLike;
    this._cardId = cardId;
  }

  isLiked() {
    return (
      this._likes.some((like) => {
        return like._id == this._id;
      })
    );
  }

  _getLikeCounter() {
    const likesCount = this._element.querySelector(".element__like-counter");
    likesCount.textContent = this._likes.length;
    this._likesToggle();
  }

  _likesToggle(array) {
    const likeButton = this._element.querySelector(".element__content-like");
    if (this.isLiked(array)) {
      likeButton.classList.add("element__content-like_active");
    } else {
      likeButton.classList.remove("element__content-like_active");
    }
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    const cardImage = this._element.querySelector(".element__image");
    const cardTitle = this._element.querySelector(".element__content-text");

    cardTitle.textContent = this._name;
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._element.querySelector(
      ".element__content-text"
    ).textContent = this._name;

    this.setEventListeners();
    this._getLikeCounter();
    this._renderButtons();

    return this._element;
  }

  setLikes(array) {
    this._likes = array.likes;
    this._getLikeCounter();
  }

  cardRemove() {
    this._element.remove();
    this._element = null;
  }

  id() {
    return this._cardId;
  }

  _renderButtons() {
    this._deletButton = this._element.querySelector(".element__content-basket");
    if (this._id === this._owner) {
      this._deletButton.classList.add("element__content-basket_visible");
    } else {
      this._deletButton.classList.add("element__content-basket_hidden");
    }
  }

  setEventListeners() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });
    this._element
      .querySelector(".element__content-basket")
      .addEventListener("click", () => {
        this._cardDelete(this);
      });
    this._element
      .querySelector(".element__content-like")
      .addEventListener("click", () => {
        this._elementLike(this);
      });
  }
}
