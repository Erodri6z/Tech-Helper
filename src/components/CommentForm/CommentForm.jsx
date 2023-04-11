
import React, { useState } from "react"

const CommentForm = (props) => {
  const [formData, setFormData] = useState({
    text: '',
  })

  const handleChange = (evt) => {
    setFormData({...formData,
      [evt.target.name] : evt.target.value
    })
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    e.target.reset()
    try{
      props.handleCreateComment(props.post._id, formData)
    }catch (err) {
      console.log(err)
    }
  }

  

  return (
    <>
    <div>
      <form autoComplete="off" onSubmit={handleCommentSubmit}>
        <textarea type="text" id="comment-box" name="text" onChange={handleChange}/>
        <button type="submit" >Submit</button>
      </form>
    </div>
    </>
  )
}

export default CommentForm