import React from 'react'
import {
  Link,
  Routes,
  Route,
} from 'react-router-dom'

const Label = () => <p>I'm a nested route component</p>

const NestedRoute = () => {

  return (
    <>
    <p><Link to="nested">nested route</Link></p>
    <Routes>
      <Route path="nested" element={<Label />} />
    </Routes>
    </>
  )
}

export default NestedRoute
