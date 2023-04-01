
import { useState } from "react"

const CommentForm = (props) => {
  const [formData, setFormData] = useState({
    text: '',
  })

  const handleChange = (e)=> {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    const newPost = props.handleCreateComment(props.user.profile, formData)
  }


  return (
    <>
    <div>
      <form autoComplete="off" onSubmit={handleCommentSubmit}>
        <textarea type="text" id="comment-box" name="text" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default CommentForm