import { Navigate } from "react-router-dom"
import React, { useState } from 'react'

const PostForm = (props) => {
  const [formData, setFormData] = useState({
    question: '',
    elaboration:'',
    os: '',
  })
  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      props.handleAddNote(formData)
      Navigate('/')
    }catch (err) {
      console.log(err)
    }
  }

  return(
    <div className="post-entry">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Whats on your mind?</p>
        </label>
        <input type="text" name="question" id="question-box" />
        <label>
          <p>Elaborate</p>
        </label>
        <input type="text" name="elaboration" is="elaboration-box" />
        <select name="os" id="os-select">
          <option value="IOS">IOS</option>
          <option value="ANDROID">Android</option>
        </select>
      </form>
    </div>
  )

}

export default PostForm