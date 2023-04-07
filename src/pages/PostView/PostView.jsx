import { useLocation } from "react-router"
import React, { useEffect, useState } from "react"
import { getPost } from '../../services/postService'
import { Link } from "react-router-dom"
import CommentForm from "../../components/CommentForm/CommentForm"

const PostView = (props) => {
  const [post, setPost] = useState([])
  const location = useLocation()
  const thisPost = post

  useEffect(() => {
    const fetchPostDetails = async () => {
      const postData = await getPost(location.state.p._id)
      setPost(postData)
    }
    fetchPostDetails(post)
  },[thisPost._id])

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
      <CommentForm 
      handleCreateComment={props.handleCreateComment}
      user={props.user}
      post={thisPost}/>

      {thisPost.comment.length > 0?
      thisPost.comment.map(c => 
        <div>
          <h4>{c.author.name}</h4>
          <p>{c.text}</p>
        </div>
      )
      :
      <h1>no comments</h1>
      }

    </div>
    </>
  )
}

export default PostView
