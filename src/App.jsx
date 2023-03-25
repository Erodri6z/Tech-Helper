import './App.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router';
// import * as profileService from './services/profileService';
import * as authService from './services/authService'
import * as postService from './services/postService'
import Signup from './pages/Signup/Signup'
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import IOS from './pages/IOS/IOS';
import Android from './pages/Android/Android';
import Landing from './pages/Landing/Landing';
import Head from './components/Head/Head';
import AForum from './pages/Forum/AForum';
import IForum from './pages/Forum/IForum';
import PostView from './pages/PostView/PostView';
import Login from './pages/Login/Login';

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postsData = await postService.getAll()
      setPosts(postsData)
    }
    fetchAllPosts()
  }, [])


  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddPost = async (newPostData) => {
    const newPost = await postService.create(newPostData)
    setPosts([...posts, newPost])
  }

  const handleDeletePost = async postId => {
    const deletedPost = await postService.deletePost(postId)
    const newPostArray = posts.filter(post => post._id !== deletedPost._id)
    setPosts(newPostArray)
  }


  return (
  <>
  <Head user={user} handleLogout={handleLogout}/>
  <Routes>
    <Route
    path="/"
    element={
      <Landing user={user} /> 
    }
    />
    <Route 
    path="/about"
    element={
    <About />
    }
    />
    <Route
    path="/signup"
    element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
    />
    <Route
    path="/login"
    element={
      <Login handleSignupOrLogin={handleSignupOrLogin} />
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
      <Android user={user}/>
    } 
    />
    <Route
    path='/android/forum'
    element={
      <AForum
      handleAddPost={handleAddPost}
      posts={posts}
      />
    }
    />
    <Route
    path='/ios/forum'
    element={
      <IForum
      handleAddPost={handleAddPost}
      posts={posts}
      />
    }
    />
    <Route
      path='/post'
      element={
        <PostView
        posts={posts}
        user={user}
        handleDeletePost={handleDeletePost}
        />
      }
    />
  </Routes>
  <Footer />
  </> 
  )
}

export default App;
