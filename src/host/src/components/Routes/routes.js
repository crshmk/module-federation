import React, { lazy } from 'react'

const Fallback = () => <p>the fallback</p>

const catchImport = err => {
  console.log(err)
  return { default: Fallback }
}

const Buttons = lazy(() => import('remote1/Buttons').catch(catchImport))
const Img = lazy(() => import('remote1/Img').catch(catchImport))
const List = lazy(() => import('remote2/List').catch(catchImport))

const routes = [
  {
    path: '/buttons/*',
    component: <Buttons />
  },
  {
    path: '/img',
    component: <Img />
  },
  {
    path: '/list',
    component: <List />
  }
]

export default routes
