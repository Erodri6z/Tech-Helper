import { useLocation } from "react-router"
import React, { useEffect, useState } from "react"
import { getPost } from '../../services/postService'
import { Link } from "react-router-dom"
import * as  postService from '../../services/postService'
import CommentForm from "../../components/CommentForm/CommentForm"

const PostView = (props) => {
  const [post, setPost] = useState([])
  const location = useLocation()
  const idx = props.post.findIndex(post => post._id === location.state.p._id)
  const thisPost = props.post[idx]
  
  
  useEffect(() => {
    const fetchPostDetails = async () => {
      const postData = await getPost(thisPost._id)
      setPost(postData)
    }
    fetchPostDetails(post)
  },[thisPost])

  // const handleDeleteComment = async (postId, commentId) => {
  //   const updatedPost = await postService.deleteComment(postId, commentId)
  //   setPost(props.post.map(p => 
  //     updatedPost._id === p._id ? updatedPost : p 
  //     ))
    
  // }

  return(
    <>
    <div className="post-view">
      <h2>{location.state.p.poster.name}</h2>
      <h3>{thisPost.question}</h3>
      <p>{thisPost.elaboration}</p>
      {
        props.user.profile === location.state.p.poster._id ?
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
      post={post}/>
      
      {thisPost.comment.length?
      thisPost.comment.map(c => 
        <div key={c._id}>
          <h4>{c.author.name}</h4>
          <p>{c.text}</p>
          <button onClick={() => props.handleDeleteComment(thisPost._id, c._id)}>Delete</button>
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
