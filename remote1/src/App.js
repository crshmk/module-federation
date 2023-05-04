import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Buttons from './Buttons'
 import Img from './Img'
 import { CountProvider } from 'host/useCount'

const App = () => (
  <BrowserRouter>
  <CountProvider>
  <div>
    <p>remote 1 development container</p>
    <Buttons />
    <Img />
  </div>
  </CountProvider>
  </BrowserRouter>
)

export default App
