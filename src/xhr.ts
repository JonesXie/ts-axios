import { IAxiosRequestConfig, AxiosPromise, IAxiosReponse } from './types/index'
import { parseHeaders } from './helpers/header'
function xhr(config: IAxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { url, method = 'get', data = null, headers, responseType, timeout } = config
    const request = new XMLHttpRequest()
    responseType && (request.responseType = responseType)
    timeout && (request.timeout = timeout)
    request.open(method.toUpperCase(), url)
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      if (request.status === 0) {
        return
      }
      const responeHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType === 'text' ? request.responseText : request.response
      const response: IAxiosReponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responeHeaders,
        config,
        request
      }
      handleResponse(response)
    }
    request.onerror = function handleError() {
      reject(new Error('NetWork Error!'))
    }
    request.ontimeout = function handleTimeout() {
      reject(new Error(`Timeout of ${timeout} ms exceeded`))
    }
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.send(data)
    function handleResponse(response: IAxiosReponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(new Error(`Request failed with status code ${response.status}`))
      }
    }
  })
}
export default xhr
