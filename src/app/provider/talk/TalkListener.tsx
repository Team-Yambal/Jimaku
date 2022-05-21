import * as React from 'react'
import { ISpeechRecognitionEvent } from './i-speech-recognition'
import IWindow from './i-window'
import { TalkListenerContext } from './TalkListenerContext'

declare const window: IWindow
const Recognition = window.webkitSpeechRecognition || window.SpeechRecognition

type BaseLayoutProps = {
  children: React.ReactNode
}

export const TalkListener = ({ children }: BaseLayoutProps) => {
  const [interimText, setInterimText] = React.useState('')
  const [finalText, setFinalText] = React.useState('')
  const [isListning, setIsListning] = React.useState(false)

  const recognitionResult = React.useCallback(
    (event: ISpeechRecognitionEvent) => {
      for (let i = 0; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          // console.log(`final: ${event.results[i][0]?.transcript}`)
          setInterimText('')
          recognitionFinal(event.results[i][0]?.transcript || '')
        } else {
          !isListning && setIsListning(true)
          //console.log(`interim: ${event.results[i][0]?.transcript}`)
          setInterimText(event.results[i][0]?.transcript || '')
        }
      }
    },
    [interimText, isListning]
  )

  const recognitionFinal = React.useCallback(
    (text: string) => {
      setFinalText(text)
      setIsListning(false)
    },
    [interimText, finalText, isListning]
  )

  const recognitionEnd = React.useCallback(() => {
    console.log('re start')
    startRecognition()
  }, [])

  const startRecognition = React.useCallback(() => {
    const recognition = new Recognition()
    recognition.lang = 'ja-JP'
    recognition.continuous = true
    recognition.interimResults = true
    recognition.onresult = recognitionResult
    recognition.onend = recognitionEnd
    recognition.start()
  }, [])

  React.useEffect(() => {
    console.log('mount')
    startRecognition()
  }, [])

  return (
    <TalkListenerContext.Provider
      value={{
        interimText,
        finalText,
        isListning,
      }}
    >
      {children}
    </TalkListenerContext.Provider>
  )
}
