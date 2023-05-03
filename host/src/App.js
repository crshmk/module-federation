import React, { Suspense } from 'react'

import './index.css'

const Buttons = React.lazy(() => import('remote1/Buttons'))
const Img = React.lazy(() => import('remote1/Img'))
const List = React.lazy(() => import('remote2/List'))
import { CountProvider } from 'host/useCount'

const App = () => (
  <div>
    <p>The host app</p>
    <Suspense fallback={null}> 
      <CountProvider>
      <List />
      <Buttons />
      <Img />
      </CountProvider>
    </Suspense>
  </div>
)

export default App

