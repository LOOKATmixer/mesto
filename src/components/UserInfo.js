export default class UserInfo {
  constructor({ name, about }) {
    this._userName = name;
    this._aboutName = about;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._aboutName.textContent,
    } 
  }

  setUserInfo(name, about) {
    this._userName.textContent = name;
    this._aboutName.textContent = about;
  }
}
