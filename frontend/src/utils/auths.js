// eslint-disable-next-line import/no-unresolved, import/no-relative-packages
import { renderPopUp } from "./popUp";

const STORE_NAME = 'user';
const REMEMBER_ME = 'remembered';

let currentUser;

const getAuthenticatedUser = () => {
  if (currentUser !== undefined) return currentUser;

  const remembered = getRememberMe();
  const serializedUser = remembered
    ? localStorage.getItem(STORE_NAME)
    : sessionStorage.getItem(STORE_NAME);

  if (!serializedUser) return undefined;

  currentUser = JSON.parse(serializedUser);
  return currentUser;
};

const setAuthenticatedUser = (authenticatedUser) => {
  const serializedUser = JSON.stringify(authenticatedUser);
  const remembered = getRememberMe();
  if (remembered) localStorage.setItem(STORE_NAME, serializedUser);
  else sessionStorage.setItem(STORE_NAME, serializedUser);

  currentUser = authenticatedUser;
};

const isAuthenticated = () => currentUser !== undefined;

const clearAuthenticatedUser = () => {
  localStorage.clear();
  sessionStorage.clear();
  currentUser = undefined;
};

function getRememberMe() {
  const rememberedSerialized = localStorage.getItem(REMEMBER_ME);
  const remembered = JSON.parse(rememberedSerialized);
  return remembered;
}

function setRememberMe(remembered) {
  const rememberedSerialized = JSON.stringify(remembered);
  localStorage.setItem(REMEMBER_ME, rememberedSerialized);
}



function isStrongPassword(password) {

  // Au moins une lettre majuscule, une lettre minuscule, un chiffre, et au moins 8 caractères
  if (!/(?=.*[a-z])/.test(password)) {
    const message = document.getElementById('message');
      message.innerHTML = `<div id="popUp">Password must contain at least one lowercase letter.</div>`;
      renderPopUp();
      return false;
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    const message = document.getElementById('message');
      message.innerHTML = `<div id="popUp">Password must contain at least one capital letter.</div>`;
      renderPopUp();
      return false;
  }
  if (!/(?=.*\d)/.test(password)) {
    const message = document.getElementById('message');
      message.innerHTML = `<div id="popUp">Password must contain at least one number.</div>`;
      renderPopUp();
      return false;
  }
  if (password.length < 8) {
    const message = document.getElementById('message');
    message.innerHTML = `<div id="popUp">Password must be at least 8 characters long.</div>`;
    renderPopUp();
    return false;
  }
  
  return true;
}


export {
  getAuthenticatedUser,
  setAuthenticatedUser,
  isAuthenticated,
  clearAuthenticatedUser,
  getRememberMe,
  setRememberMe,
  isStrongPassword
};