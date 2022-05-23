import * as React from 'react'
import { TalkListenerContext } from '../../app/provider/talk/TalkListenerContext'
import { useLazyPerseQuery } from '../../app/store/queries/daSetviceQueries'

type BaseLayoutProps = {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { finalText, interimText, isListning } =
    React.useContext(TalkListenerContext)

  const [daPerse, response] = useLazyPerseQuery()

  React.useEffect(() => {
    daPerse({
      appId: 'dj00aiZpPU9GY0lDbFBMbXAyOSZzPWNvbnN1bWVyc2VjcmV0Jng9YzI-',
      text: finalText,
    })
  }, [finalText])

  return (
    <div>
      {finalText}
      <br />
      {interimText}
      <br />
      {isListning && '*'}
      <pre>{JSON.stringify(response.data, null, 2)}</pre>
      {children}
    </div>
  )
}
