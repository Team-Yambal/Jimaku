import React from 'react'
import Button from '@mui/material/Button'

type CounterProps = {
  count: number
  onClickAdd: () => void
}

export const Counter = ({ count, onClickAdd }: CounterProps) => {
  return (
    <div>
      {count}
      <Button variant="contained" onClick={onClickAdd}>
        Add
      </Button>
    </div>
  )
}
