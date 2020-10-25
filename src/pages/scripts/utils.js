//import { popups } from "./constants.js";
//
////функция открытия попапов
//export function openPopup(popupWindow) {
//  popupWindow.classList.add("popup_opened");
//  document.addEventListener("keydown", handleEscUp);
//}
//
////функции закрытия попапов
//export function closePopupWindow(popupWindow) {
//  popupWindow.classList.remove("popup_opened");
//  document.removeEventListener("keydown", handleEscUp);
//}
//
////функция закрытия клавишей
//export function handleEscUp(evt) {
//  const openedPopup = document.querySelector(".popup_opened");
//  if (evt.key === "Escape") {
//    closePopupWindow(openedPopup);
//  }
//}
//
////функция закрытия кликом на оверлей
//export function closeOnOverlayClick(evt, popupWindow) {
//  if (evt.target.classList.contains("popup_opened")) {
//    closePopupWindow(popupWindow);
//  }
//}
//
//popups.forEach((popupElement) => {
//  popupElement.addEventListener("mousedown", (evt) =>
//    closeOnOverlayClick(evt, popupElement)
//  );
//});
