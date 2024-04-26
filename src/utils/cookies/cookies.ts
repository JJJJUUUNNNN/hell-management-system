export function setCookie(
  name: string,
  value: string,
  maxAgeOrExpire: any = 60 * 60 * 24 * 7
) {
  if (typeof maxAgeOrExpire == "number") {
    document.cookie = `${name}=${value};max-age=${maxAgeOrExpire}`;
  } else if (maxAgeOrExpire instanceof Date) {
    document.cookie = `${name}=${value};expires=${maxAgeOrExpire}`;
  } else {
    console.log("wrong cookie");
  }
}

export function getCookies(name: string) {
  const cookieRecord: any = {};
  document.cookie.split("; ").forEach((e) => {
    const cookie = e.split("=");
    const [key, value] = cookie;
    cookieRecord[key] = value;
  });
  return cookieRecord[name] || null;
}

export function removeCookie(name: string) {
  setCookie(name, "", -1);
}
