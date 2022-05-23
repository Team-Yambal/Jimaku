import { DAServiceResponse } from '../../../../app/models/DAServiceResponse'

export type Methods = {
  post: {
    reqBody: {
      id: string
      jsonrpc: string
      method: string
      params: {
        q: string
      }
    }
    reqHeaders: {
      'Content-Type': string
      'User-Agent': string
    }
    resBody: DAServiceResponse
  }
}
