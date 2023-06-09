import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Buttons = lazy(async () => await import('remote1/Buttons'))
const Img = lazy(() => import('remote1/Img'))
const List = lazy(() => import('remote2/List'))

const AppRoutes = () => (
  <Routes>
    <Route path="/buttons/*" element={<Buttons />} />
    <Route path="/img" element={<Img />} />
    <Route path="/list" element={<List />} />
  </Routes>
  )

export default AppRoutes
