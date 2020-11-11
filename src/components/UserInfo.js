export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._userName = name;
    this._aboutName = about;
    this._userAvatar = avatar;
  }

  getUserInfo() {
    this._userProfileData = {};
    this._userProfileData.name = this._userName.textContent;
    this._userProfileData.about = this._aboutName.textContent;
    return this._userProfileData;
  }

  setUserInfo(name, about, userId, avatar) {
    this._userName.textContent = name;
    this._aboutName.textContent = about;
    this._userId = userId;
    this._userAvatar.src = avatar;
  }
}
