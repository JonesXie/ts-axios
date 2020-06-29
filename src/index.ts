import { IAxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'

function axios(config: IAxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}
function processConfig(config: IAxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}
function transformURL(config: IAxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
function transformRequestData(config: IAxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
