import { wjjRequest } from "@/utils/request";

export function getCaptchaImage() {
  return wjjRequest({
    url: "/captchaImage",
    method: "get",
  });
}

export function getLogin(data: object) {
  return wjjRequest({
    url: "/login",
    method: "post",
    data,
  });
}
