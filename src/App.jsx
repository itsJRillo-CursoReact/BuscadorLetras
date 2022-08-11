import { useState } from 'react'
import AppLetras from './components/AppLetras'
import { LetrasProvider } from './context/LetrasProvider'

import "./index.css"

function App() {
  return (
    <LetrasProvider>
      <AppLetras/>
    </LetrasProvider>
  )
}

export default App
