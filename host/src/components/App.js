import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import Nav from './Nav'
import Routes from './Routes'
import { CountProvider } from 'host/useCount'

const App = () => (
  <BrowserRouter>
  <div>
    <p>The host app</p>
    <Nav />
    <Suspense fallback={null}> 
      <CountProvider>
        <Routes />
      </CountProvider>
    </Suspense>
  </div>
  </BrowserRouter>
)

export default App