import * as React from 'react'
import { ListItemButton, ListItemButtonProps } from '@mui/material'
import { ListItemIcon, ListItemText } from '@mui/material'

type ListItemButtonWrapProps = ListItemButtonProps & {
  text: string
  icon: JSX.Element
}

export const ListItemButtonWrap = ({
  text,
  icon,
  ...restProps
}: ListItemButtonWrapProps) => {
  const iconElem = React.useMemo(() => {
    return icon ? <ListItemIcon>{icon}</ListItemIcon> : null
  }, [icon])
  return (
    <ListItemButton {...restProps}>
      {iconElem}
      <ListItemText primary={text} />
    </ListItemButton>
  )
}
