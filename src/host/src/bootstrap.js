import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App'

const container = document.getElementsByTagName('div')[0]

const root = createRoot(container)

root.render(<App />)
