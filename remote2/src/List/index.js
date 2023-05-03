import React from 'react'

import './list.css'

import useCount from 'host/useCount'

const List = () => {
  const { count } = useCount()
  return (
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
      <li>count is {count}</li>
    </ul>
  )
} 

export default List

