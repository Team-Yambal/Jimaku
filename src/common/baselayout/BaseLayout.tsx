import * as React from 'react'
import { TalkListenerContext } from '../../app/provider/talk/TalkListenerContext'

type BaseLayoutProps = {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const { finalText, interimText, isListning } =
    React.useContext(TalkListenerContext)
  return (
    <div>
      {finalText}
      <br />
      {interimText}
      <br />
      {isListning && '*'}
      {children}
    </div>
  )
}
