import React, { lazy  } from 'react'
import { Route, Routes } from 'react-router-dom'

import makeRoute from './makeRoute'
import routes from './routes'

const routeElements = routes.map(makeRoute)

const AppRoutes = () => (
  <Routes>
    {routeElements}
  </Routes>
  )

export default AppRoutes

