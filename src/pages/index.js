import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import Api from "../components/Api.js";

import {
  validationParams,
  profileName,
  profileAbout,
  profileAvatar,
  cardId,
  popupProfile,
  popupCard,
  popupImage,
  popupAvatar,
  popupDelete,
  editButton,
  cardButton,
  avatarButton,
  inputName,
  inputAbout,
  profileAvatarUrl,
} from "../components/constants.js";

//API
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-17",
  headers: {
    authorization: "3edb3715-d2b8-46c3-8d1b-ee5c4e7c3cc4",
    "Content-Type": "application/json",
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()]).then((values) => {
  const [userData, item] = values;

  const userProfile = new UserInfo({
    name: profileName,
    about: profileAbout,
    avatar: profileAvatar,
  });

  userProfile.setUserInfo(
    userData.name,
    userData.about,
    userData._id,
    userData.avatar
  );

  const serverCardLike = (card) => {
    if (card.isLiked()) {
      api
        .deleteLike(card._cardId)
        .then((data) => {
          card.setLikes(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .addLike(card._cardId)
        .then((data) => {
          card.setLikes(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const serverDelete = (card) => {
    deletePopupSubmit.open();
    deletePopupSubmit.handleSubmit(() => {
      api
        .deleteCard(card._cardId)
        .then((res) => {
          card.cardRemove(res);
          deletePopupSubmit.close();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const popupEditProfile = new PopupWithForm({
    popupSelector: popupProfile,
    handleFormSubmit: ({ nameProfile, aboutProfile }) => {
      popupEditProfile.loading(true);
      api
        .changeUserInfo({
          name: nameProfile,
          about: aboutProfile,
        })
        .then((res) => {
          userProfile.setUserInfo(res.name, res.about, res._id, res.avatar);
          popupEditProfile.close();
        })
        .catch((err) => console.log(`Error ${err}`))
        .finally(() => {
          popupEditProfile.loading(false);
        });
    },
  });
  popupEditProfile.setEventListeners();

  const popupAddCard = new PopupWithForm({
    popupSelector: popupCard,
    handleFormSubmit: ({ namePlace, aboutPlace }) => {
      popupAddCard.loading(true);
      api
        .addNewCards({
          name: namePlace,
          link: aboutPlace,
        })
        .then((res) => {
          addNewCard(res);
          popupAddCard.close();
        })
        .catch((err) => console.log(`Error ${err}`))
        .finally(() => {
          popupAddCard.loading(false);
        });
    },
  });
  popupAddCard.setEventListeners();

  const popupEditAvatar = new PopupWithForm({
    popupSelector: popupAvatar,
    handleFormSubmit: ({ avatar }) => {
      popupEditAvatar.loading(true);
      api
        .changeAvatar({
          avatar: avatar,
        })
        .then((res) => {
          userProfile.setUserInfo(res.name, res.about, res._id, res.avatar);
          popupEditAvatar.close();
        })
        .catch((err) => console.log(`Error ${err}`))
        .finally(() => {
          popupEditAvatar.loading(false);
        });
    },
  });
  popupEditAvatar.setEventListeners();

  const deletePopupSubmit = new PopupWithSubmit(popupDelete);
  deletePopupSubmit.setEventListeners();

  function handleCardClick(name, link) {
    popupFullImage.open(name, link);
  }

  function addNewCard(items) {
    const card = new Card(
      {
        ...items,
        handleCardClick: handleCardClick,
        cardDelete: serverDelete,
        elementLike: serverCardLike,
      },
      userData._id,
      items._id,
      cardId
    );
    const cardElement = card.generateCard();
    addCardList.addItem(cardElement);
    return card;
  }

  const popupFullImage = new PopupWithImage(popupImage);
  popupFullImage.setEventListeners();

  cardButton.addEventListener("click", () => {
    popupAddCard.open();
  });

  editButton.addEventListener("click", () => {
    const profileInfo = userProfile.getUserInfo();
    inputName.value = profileInfo.name;
    inputAbout.value = profileInfo.about;
    popupEditProfile.open();
  });

  avatarButton.addEventListener("click", () => {
    popupEditAvatar.open();
  });

  const addCardList = new Section(
    {
      items: item.reverse(),
      renderer: (data) => {
        addNewCard(data);
      },
    },
    ".elements__list"
  );
  addCardList.renderItems();

  //Валидация форм
  const popupCardFormValidator = new FormValidator(validationParams, popupCard);
  popupCardFormValidator.enableValidation();

  const popupProfileFormValidator = new FormValidator(
    validationParams,
    popupProfile
  );
  popupProfileFormValidator.enableValidation();

  const popupAvatarFormValidator = new FormValidator(
    validationParams,
    popupAvatar
  );
  popupAvatarFormValidator.enableValidation();
});
