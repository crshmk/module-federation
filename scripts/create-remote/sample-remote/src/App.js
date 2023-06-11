import React from 'react'

import List from './List'
import { CountProvider } from 'host/useCount'

const App = () => (
  <CountProvider>
  <div>
    <p>remote development container</p>
    <List />
  </div>
  </CountProvider>
)

export default App
