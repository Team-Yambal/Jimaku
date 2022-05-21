import { createContext } from 'react'

export type TalkListenerContextValue = {
  interimText: string
  finalText: string
  isListning: boolean
}

export const TalkListenerContextDefaultValue: TalkListenerContextValue = {
  interimText: '',
  finalText: '',
  isListning: false,
}
export const TalkListenerContext = createContext<TalkListenerContextValue>(
  TalkListenerContextDefaultValue
)
