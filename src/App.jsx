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
import PostEdit from './pages/PostEdit/PostEdit';

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

  const handleDeletePost = async (postId) => {
    const deletedPost = await postService.deletePost(postId)
    const newPostArray = posts.filter(post => post._id !== deletedPost._id)
    setPosts(newPostArray)
    navigate(-2)
  }

  const handleUpdatePost = async (postData) => {
    const updatedPost = await postService.updatePost(postData)
    const newPostArray = posts.map(
      post => post._id === updatedPost._id ?
      updatedPost : post
    )
    setPosts(newPostArray)
    navigate(-2)
  }

  const handleCreateComment = async (postId, commentData) => {
    const newComment = await postService.createComment(postId, commentData)
    setPosts(posts.map(
      post => post._id === newComment._id ?
      newComment : post
    ))
  }
  const handleDeleteComment = async (postId, commentId) => {
    const updatedPost = await postService.deleteComment(postId, commentId)
    setPosts(posts.map(p => 
      updatedPost._id === p._id ? updatedPost : p 
    ))
  }

  const sortArr = (arr) => {
    return arr.sort((a, b) => {
      if(arr.indexOf(a) > arr.indexOf(b)) return -1
      if(arr.indexOf(a) < arr.indexOf(b)) return 1
      return 0
    })
  }

  const togglePostEntry = () => {
    const postEntryOn = document.querySelector('.post-entry')
    postEntryOn.classList.toggle('off-mode')
  }

  const toggleBtn = () => {
    const hideBtn = document.querySelector('.toggle-btn')
    hideBtn.classList.toggle('hide-btn')
  }

  const commentToggle = () => {
    const commentOn = document.querySelector('.comment-form')
    commentOn.classList.toggle('off-mode')
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
    element={
    <Signup 
      handleSignupOrLogin={handleSignupOrLogin} 
      />
    }
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
      <IOS user={user} />
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
      user={user}
      sortArr={sortArr}
      togglePostEntry={togglePostEntry}
      toggleBtn={toggleBtn}
      />
    }
    />
    <Route
    path='/ios/forum'
    element={
      <IForum
      user={user}
      handleAddPost={handleAddPost}
      posts={posts}
      sortArr={sortArr}
      togglePostEntry={togglePostEntry}
      toggleBtn={toggleBtn}
      />
    }
    />
    <Route
      path='/post'
      element={
        <PostView
        post={posts}
        user={user}
        handleDeletePost={handleDeletePost}
        handleCreateComment={handleCreateComment}
        handleDeleteComment={handleDeleteComment}
        commentToggle={commentToggle}
        />
      }
    />
    <Route
      path='/post-edit'
      element={
        <PostEdit
        handleUpdatePost={handleUpdatePost}
        />
      }
    />
  </Routes>
  <Footer />
  </> 
  )
}

export default App;
