import './CommentForm.css'
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
    <div className='comment-form off-mode'>
      <form autoComplete="off" onSubmit={handleCommentSubmit} className='comment-entry'>
        <textarea type="text" id="comment-box" name="text" onChange={handleChange}/>
        <br />
        <button type="submit" className='submit-button' id='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default CommentForm