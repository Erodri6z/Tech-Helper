import { useLocation } from "react-router"
import React, { useEffect, useState } from "react"
import { getPost } from '../../services/postService'

const PostView = () => {
  const [posts, setPosts] = useState([])
  const location = useLocation()

  useEffect(() => {
    const fetchPostDetails = async () => {
      const postData = await getPost(posts._id)
      setPosts(postData)
    }
    fetchPostDetails(posts)
  }, [posts._id])

  return(
    <>
    <h1>{location.state.p.question}</h1>
    </>
  )
}

export default PostView
