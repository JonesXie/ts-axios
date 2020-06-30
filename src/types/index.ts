export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'options'
  | 'OPTIONS'
  | 'put'
  | 'PUT'
  | 'delete'
  | 'DELETE'
  | 'patch'
  | 'PATCH'
export interface IAxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface IAxiosReponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: IAxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<IAxiosReponse> {}
