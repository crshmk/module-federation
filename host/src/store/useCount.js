import React, { createContext, useContext, useState } from 'react'

const CountContext = createContext()

const useCount = () => useContext(CountContext)

export default useCount

export const CountProvider = props => {
  const [count, setCount] = useState(0)

  const inc = () => setCount(current => current+1)

  const dec = () => setCount(current => current-1)

  const ctx = { count, dec, inc }

  return (
    <CountContext.Provider value={ctx}>
      {props.children}
    </CountContext.Provider>
  )


}