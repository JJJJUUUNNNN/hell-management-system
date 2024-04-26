import { getToken } from "../cookies";
import { getErrMsgByCode, getErrMsgByNativeStatus } from "./getErrMsg";
import { useMessage } from "naive-ui";

const baseUrl = import.meta.env.VITE_APP_API_URL;

// function getUrlParmamsStr(data: object) {
//   if (!data || typeof data !== "object") return "";
//   const dataArr = [];
//   if (data) {
//     for (const key in data) {
//       if (key) {
//         dataArr.push(`${key}=${data[key]}`);
//       }
//     }
//   }
//   return dataArr.join("&");
// }

// function addBaseUrl(url: string) {
//   let finalUrl = "";
//   if (url.startsWith("http") || url.startsWith("https")) {
//     finalUrl = url;
//   } else {
//     finalUrl = baseUrl + url;
//   }
//   return finalUrl;
// }

type requestMethod = "get" | "post" | "put" | "delete";

interface Request {
  method: requestMethod;
  data: object;
  params: object;
  headers: object;
  responseType: string;
  url: string;
  withoutToken: boolean;
}

export function wjjRequest(options: Request) {
  return new Promise((resolve, reject) => {
    const {
      method = "get",
      data = {},
      params = {},
      headers = {},
      responseType = "json",
      url = "",
      withoutToken = false,
    } = options;

    if (url) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          try {
            if (xhr.status === 200) {
              const { response } = xhr;
              if (response.code === 200) {
                resolve(response);
              } else {
                const errMsg = getErrMsgByCode(response.code);

                if (response.msg) {
                  throw new Error(response.msg);
                } else {
                  throw new Error(errMsg);
                }
              }
            } else {
              const errMsg = getErrMsgByNativeStatus(xhr.status);
              throw new Error(errMsg);
            }
          } catch (err: any) {
            console.log(err);
            const message = useMessage();
            message.error(err.message || "发生错误！");
            reject(err);
          }
        }
      };
    }
  });
}
