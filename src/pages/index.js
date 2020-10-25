import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

import {
  initialCards,
  validationParams,
  profileName,
  profileAbout,
  cardId,
  popupProfile,
  popupCard,
  editButton,
  cardButton,
  inputName,
  inputAbout,
  cardNameInput,
  cardImageUrl
} from "../components/constants.js";

//Валидация форм
const popupCardFormValidator = new FormValidator(validationParams, popupCard);
popupCardFormValidator.enableValidation();

const popupProfileFormValidator = new FormValidator(
  validationParams,
  popupProfile
);
popupProfileFormValidator.enableValidation();

//Добавление карточек
const addCardList = new Section(
  {
    items: initialCards,
    renderer: ({ name, link }) => {
      addCardList.addItem(renderCard(name, link));
    },
  },
  ".elements__list"
);
addCardList.renderItems();

//Информация о пользователе
const userProfile = new UserInfo({
  name: profileName,
  about: profileAbout,
});

//Попап профиля
const popupEditProfile = new PopupWithForm({
  popupSelector: ".popup_type_profile",
  handleFormSubmit: ({ nameProfile, aboutProfile }) => {
    userProfile.setUserInfo(nameProfile, aboutProfile);
  },
});
popupEditProfile.setEventListeners();

//Попап добавления картинки
const popupAddCard = new PopupWithForm({
  popupSelector: ".popup_type_card",
  handleFormSubmit: ({ namePlace, aboutPlace }) => {
    addCardList.addItem(renderCard(namePlace, aboutPlace));
  },
});
popupAddCard.setEventListeners();

//Попап с картинкой
const popupImage = new PopupWithImage(".popup_type_image");
popupImage.setEventListeners();

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

function renderCard(name, link) {
  const card = new Card(name, link, cardId, handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

cardButton.addEventListener("click", () => {
  popupAddCard.open();
  cardNameInput.value = "";
  cardImageUrl.value = "";
});

editButton.addEventListener("click", () => {
  const profileInfo = userProfile.getUserInfo();
  inputName.value = profileInfo.name;
  inputAbout.value = profileInfo.about;
  popupEditProfile.open();
});
