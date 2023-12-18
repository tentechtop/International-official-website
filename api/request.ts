import { baseUrl } from '~~/config'
import { messageDanger } from '~~/utils/toast'
let errorResponse: ApiResponse = {
  success: false,
  code: 0,
  message: '',
  data: null,
}
let thisCookie =document.cookie



function parseCookies(cookieString) {
  let cookies = {};
  cookieString.split(';').forEach(function(cookie) {
    let parts = cookie.split('=');
    let name = decodeURIComponent(parts[0].trim());
    cookies[name] = decodeURIComponent(parts[1]);
  });
  return cookies;
}

let parseCookies1 = parseCookies(thisCookie);

const $http = async (baseUrl: string, options: any): Promise<ApiResponse> => {
  const {method = 'GET', params = {}, body = {}, headers,} = options

  const res: any = await $fetch<ApiResponse>(baseUrl, {
    headers: {
      ...headers,
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept-Language':`${parseCookies1["language"]}`,
      'Cookie-Uuid':`${parseCookies1["cookie-uuid"]}`,
    },
    method,
    /* fetch中 params和body不能同时存在 */
    params: ['GET', 'DELETE'].includes(method.toUpperCase()) ? params : undefined,
    body: ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase()) ? body : undefined,
    onResponseError (ctx: any) {
      console.log('onRequestError', ctx)
      // console.log("status", ctx.response);
      const status: number = ctx.response.status
      try {
        if (status === 401) {


        }
        messageDanger(ctx.response._data.message || '')
        return Promise.reject(ctx.response._data)
      } catch (error) {
        // console.log("onRequestError", error);
        return Promise.reject(error)
      }
    },
  })
}







export default { http: $http}
