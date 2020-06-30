import { IAxiosRequestConfig, AxiosPromise, IAxiosReponse } from './types/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/header'

function axios(config: IAxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}
function processConfig(config: IAxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: IAxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
function transformRequestData(config: IAxiosRequestConfig): any {
  return transformRequest(config.data)
}
function transformHeaders(config: IAxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
function transformResponseData(response: IAxiosReponse): IAxiosReponse {
  response.data = transformResponse(response.data)
  return response
}

export default axios
