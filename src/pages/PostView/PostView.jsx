import { useLocation } from "react-router"
import React, { useEffect, useState } from "react"
import { getPost } from '../../services/postService'
import { Link } from "react-router-dom"
import CommentForm from "../../components/CommentForm/CommentForm"

const PostView = (props) => {
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
      {
        props.user.profile === thisPost.poster._id ?
        <>
        <Link to='/post-edit' state={{ thisPost }}>
            <button>Edit</button>
        </Link>
        <button onClick={() => props.handleDeletePost(thisPost._id)}>Delete</button>
        </>
      :
      <h1>this isnt you post</h1>
      }
      <CommentForm handleCreateComment={props.handleCreateComment}/>
    </div>
    </>
  )
}

export default PostView
