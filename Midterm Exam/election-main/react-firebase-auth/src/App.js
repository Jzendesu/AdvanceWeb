import React from 'react'
import AppRouter from './components/AppRouter'
import AuthContextProvider from './contexts/AuthContext'
import logo from './img/source.png'

function App(props) {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  )
}



export default App

