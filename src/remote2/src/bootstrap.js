import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
// const App = () => <p>the pap</p>

const container = document.getElementsByTagName('div')[0]

const root = createRoot(container)

root.render(<App />)
