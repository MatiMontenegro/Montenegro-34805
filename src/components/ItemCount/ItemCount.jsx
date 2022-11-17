import { Button } from '@mui/material'
import React from 'react'

function ItemCount() {
  return (
    <div>
      <Button>-</Button>
      <Button>{total}</Button>
      <button>+</button>
    </div>
  )
}

export default ItemCount