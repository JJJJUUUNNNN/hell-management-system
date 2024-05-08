import { getToken } from "../cookies";
import { getErrMsgByCode, getErrMsgByNativeStatus } from "./getErrMsg";
import { useMessage } from "naive-ui";

const baseUrl = import.meta.env.VITE_APP_API_URL;

type requestMethod = "get" | "post" | "put" | "delete";

interface headerType {
  Authorization: string;
}

interface Request {
  method: requestMethod;
  data?: object;
  params?: ObjectKey;
  headers?: headerType;
  responseType?: XMLHttpRequestResponseType;
  url: string;
  withoutToken?: boolean;
}

interface ObjectKey {
  [key: string]: string;
}

function getUrlParmamsStr(data: ObjectKey) {
  if (!data || typeof data !== "object") return "";
  const dataArr = [];
  if (data) {
    for (const key in data) {
      if (key) {
        dataArr.push(`${key}=${data[key]}`);
      }
    }
  }
  return dataArr.join("&");
}

function addBaseUrl(url: string) {
  let finalUrl = "";
  if (url.startsWith("http") || url.startsWith("https")) {
    finalUrl = url;
  } else {
    finalUrl = baseUrl + url;
  }
  return finalUrl;
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
            const message = useMessage();
            message.error(err.message || "发生错误！");
            reject(err);
          }
        }
      };

      function open() {
        const _url = addBaseUrl(url);
        if (method === "get") {
          xhr.open(method, `${_url}?${getUrlParmamsStr(params)}`);
        } else if (method === "post") {
          xhr.open(method, _url);
        }
      }

      function setHeaders() {
        const defaultHeaders: ObjectKey = {
          "Content-Type": "application/json",
          ...headers,
        };

        if (withoutToken === false) {
          defaultHeaders.Authorization = `Bearer ${getToken()}`;
        }

        for (const key in defaultHeaders) {
          if (key) {
            xhr.setRequestHeader(key, defaultHeaders[key]);
          }
        }
      }

      function setResponseType() {
        xhr.responseType = responseType;
      }

      function send() {
        if (method === "get") {
          xhr.send();
        } else if (method === "post") {
          xhr.send(JSON.stringify(data));
        }
      }

      open()
      setHeaders()
      setResponseType()
      send()
    }else{
      reject(new Error('url 不能为空'))
    }
  });
}
