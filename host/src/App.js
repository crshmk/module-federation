import React, { Suspense } from 'react'

import './index.css'

const Button = React.lazy(() => import('remote1/Button'))
const Img = React.lazy(() => import('remote1/Img'))
const List = React.lazy(() => import('remote2/List'))

const App = () => (
  <div>
    <p>The host app</p>
    <Suspense fallback={null}> 
      <List />
      <Button />
      <Img />
    </Suspense>
  </div>
)

export default App

