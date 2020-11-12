const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`ASHIPKA: ${res.status}`);
  }
  return res.json();
};

export default class Api {
  constructor(options) {
    this._url = options.url;
    this.headers = options.headers;
    this._authorization = options.headers.authorization;
    this._contentType = options.headers["Content-type"];
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then(handleOriginalResponse);
  }

  addNewCards({ name, link }) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(handleOriginalResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(handleOriginalResponse);
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
    }).then(handleOriginalResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(handleOriginalResponse);
  }

  changeAvatar({ avatar }) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(handleOriginalResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me/`, {
      method: "GET",
      headers: this.headers,
    }).then(handleOriginalResponse);
  }

  changeUserInfo({ name, about }) {
    return fetch(`${this._url}/users/me/`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(handleOriginalResponse);
  }
}
