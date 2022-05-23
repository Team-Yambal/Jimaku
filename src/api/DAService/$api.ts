import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './V1/parse'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://jlp.yahooapis.jp/DAService' : baseURL).replace(/\/$/, '')
  const PATH0 = '/V1/parse'
  const POST = 'POST'

  return {
    V1: {
      parse: {
        post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T | undefined }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
        $post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T | undefined }) =>
          fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
