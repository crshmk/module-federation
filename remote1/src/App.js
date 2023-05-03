import React from 'react'

import Buttons from './Buttons'
 import Img from './Img'
 import { CountProvider } from 'host/useCount'

const App = () => (
  <CountProvider>
  <div>
    <p>remote 1 development container</p>
    <Buttons />
    <Img />
  </div>
  </CountProvider>
)

export default App
