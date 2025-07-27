import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import assets from './assets/assets'

const App = () => {
  return (
    // to add the bg img in all pages
    <div className="bg-[url('./src/assets/bgImage.svg')] bg-cover bg-no-repeat">
    <Routes>
         <Route path = '/' element={<HomePage />}/>
         <Route path = '/login' element={<LoginPage />}/>
         <Route path = '/profile' element={<ProfilePage />}/>
    </Routes>

    </div>
  )
}

export default App
