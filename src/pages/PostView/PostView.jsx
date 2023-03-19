import { useLocation } from "react-router"
import React, { useEffect, useState } from "react"
import { getPost } from '../../services/postService'

const PostView = () => {
  const [posts, setPosts] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchPostDetails = async () => {
      const postData = await getPost(location.state.p._id)
      setPosts(postData)
    }
    fetchPostDetails(posts)
  }, [location.state.p._id])

  return(
    <>
    <h1>{location.state.p.question}</h1>
    </>
  )
}

export default PostView
