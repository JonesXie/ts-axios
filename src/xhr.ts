import { IAxiosRequestConfig } from './types/index'

function xhr(config: IAxiosRequestConfig): void {
  const { url, method = 'get', data = null } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url)
  request.send(data)
}
export default xhr
