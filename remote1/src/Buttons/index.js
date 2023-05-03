import React from 'react'

import useCount from 'host/useCount'

const Buttons = () => {
  const { dec, inc } = useCount()

  return (
    <>
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
    </>
  )
} 
export default Buttons
