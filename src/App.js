import { CssBaseline } from '@material-ui/core'
import React from 'react'
import ThemeProvider from './component/ThemeProvider'
import MasterLayout from './screen/MasterLayout'
import RTL from './component/RTL'
function App() {
  return (
    <ThemeProvider>
      <RTL>
        <CssBaseline />
        <MasterLayout />
      </RTL>
    </ThemeProvider>
  )
}
export default App
