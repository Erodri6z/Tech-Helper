import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../components/Postform/PostForm.css'


const PostEdit = (props) => {
  const location = useLocation()
  const [formData, setFormData] = useState(location.state.thisPost)


  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      props.handleUpdatePost(formData)
    }catch (err) {
      console.log(err)
    }
  }
  return(
    <>
      <div className="post-edit">
      <form autoComplete="off" className='form' onSubmit={handleSubmit}>
        <label>
          <p>Whats on your mind?</p>
        </label>
        <input type="text" name="question" value={formData.question} id="question-box" onChange={handleChange}/>
        <br />
        <textarea type="text" name="elaboration" id="elaboration-box" value={formData.elaboration} onChange={handleChange}/>
        <br />
        <button className='submit-button'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default PostEdit