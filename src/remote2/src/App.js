import React from 'react'

import List from './List'
import { CountProvider } from 'host/useCount'

const App = () => (
  <CountProvider>
  <div>
    <p>remote 2 development container</p>
    <List />
  </div>
  </CountProvider>
)

export default App
