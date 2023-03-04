import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router';
import * as profileService from './services/profileService';
import * as authService from './services/authService';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import IOS from './pages/IOS/IOS';
import Android from './pages/Android/Android';
import Landing from './pages/Landing/Landing';
import Head from './components/Head/Head';
import AForum from './pages/Forum/AForum';
import IForum from './pages/Forum/IForum';

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }


  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }


  return (
  <>
  <Head />
  <Routes>
    <Route
    path="/"
    element={
      <Landing /> 
    }
    />
    <Route 
    path="/about"
    element={
    <About />
    }
    />
    <Route
    path='/ios'
    element={
      <IOS />
    }
    />
    <Route
    path='/android'
    element={
      <Android />
    } 
    />
    <Route
    path='/android/forum'
    element={
      <AForum />
    }
    />
    <Route
    path='/ios/forum'
    element={
      <IForum />
    }
    />
  </Routes>
  <Footer />
  </> 
  )
}

export default App;
