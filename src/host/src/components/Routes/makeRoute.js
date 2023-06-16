import React from 'react'
import { Route } from 'react-router-dom'

const Suspense = ({ children }) => (
  <React.Suspense fallback={<p>suspense</p>}>
    {children} 
  </React.Suspense>
)

const makeRoute = route => {
  const { path, component } = route 
  const element = <Suspense>{component}</Suspense>
  return <Route key={path} path={path} element={element} />
}

export default makeRoute

/*
const resolveImport = resolve => result =>
  resolve(!result ? { default: Fallback } : result.default ? result : { default: result })

const load = importFn => lazy(() => new Promise(resolve => {
  importFn()
  .then(resolveImport)
  .catch(err => 'this is not called')
}))
*/
