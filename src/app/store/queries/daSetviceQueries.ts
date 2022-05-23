import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'

import api from '../../../api/DAService/$api'
import aspida from '@aspida/axios'
import { DAServiceResponse } from '../../models/DAServiceResponse'

type daServiceQueriesProps = {
  appId: string
  text: string
}

const daServiceiAxiosClient = api(aspida())

export const daServiceQueries = createApi({
  reducerPath: 'daService',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    perse: builder.query<DAServiceResponse, daServiceQueriesProps>({
      queryFn: async (a: daServiceQueriesProps) => {
        const response = await daServiceiAxiosClient.V1.parse.$post({
          body: {
            id: '123',
            jsonrpc: '2.0',
            method: 'jlp.daservice.pars',
            params: {
              q: a.text,
            },
          },
          headers: {
            'User-Agent': a.appId,
            'Content-Type': 'application/json',
          },
        })
        return {
          data: response,
        }
      },
    }),
  }),
})

export const { useLazyPerseQuery } = daServiceQueries
