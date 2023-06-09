import React from 'react'

import useCount from 'host/useCount'
import NestedRoute from './NestedRoute'

const Buttons = () => {
  const { dec, inc } = useCount()

  return (
    <>
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
    <NestedRoute />
    </>
  )
} 
export default Buttons
