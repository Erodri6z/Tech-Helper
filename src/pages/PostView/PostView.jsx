import { useLocation } from "react-router"
import React, { useEffect, useState } from "react"
import { getPost } from '../../services/postService'

const PostView = () => {
  const [posts, setPosts] = useState([])
  const location = useLocation()
  const thisPost = location.state.p


  useEffect(() => {
    const fetchPostDetails = async () => {
      const postData = await getPost(thisPost._id)
      setPosts(postData)
    }
    fetchPostDetails(posts)
  }, [thisPost._id])

  return(
    <>
    <div className="post-view">
      <h2>{thisPost.poster.name}</h2>
      <h3>{thisPost.question}</h3>
      <p>{thisPost.elaboration}</p>
    </div>
    </>
  )
}

export default PostView
