export default class UserInfo {
  constructor({ name, about }) {
    this._userName = name;
    this._aboutName = about;
  }

  getUserInfo() {
    this._infoAboutUser = {};
    this._infoAboutUser.name = this._userName.textContent;
    this._infoAboutUser.about = this._aboutName.textContent;
    return this._infoAboutUser;
  }

  setUserInfo(name, about) {
    this._userName.textContent = name;
    this._aboutName.textContent = about;
  }
}
