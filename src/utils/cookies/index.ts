import { setCookie, getCookies, removeCookie } from "./cookies";

const TokenKey = "myToken";

export function getToken() {
  return getCookies(TokenKey);
}

export function setToken(token: string) {
  setCookie(TokenKey, token);
}

export function removeToken() {
  removeCookie(TokenKey);
}
