import * as React from 'react'

type BaseLayoutProps = {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <div>{children}</div>
}
