export type DAServiceResponse = {
  id: string
  jsonrpc: string
  result: {
    chunks: {
      head: number
      id: number
      tokens: [][]
    }[]
  }
}
