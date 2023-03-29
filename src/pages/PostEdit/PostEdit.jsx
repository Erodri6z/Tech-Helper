import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const PostEdit = (props) => {
  const location = useLocation
  const [formData, setFormData] = useState(location.state.thisPost)


  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try{
      props.handleAddPost(formData)
    }catch (err) {
      console.log(err)
    }
  }
  return(
    <>
      <div className="post-entry">
      <form autoComplete="off" className='form' onSubmit={handleSubmit}>
        <label>
          <p>Whats on your mind?</p>
        </label>
        <input type="text" name="question" id="question-box" onChange={handleChange}/>
        <label>
          <p>Elaborate</p>
        </label>
        <input type="text" name="elaboration" is="elaboration-box" onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default PostEdit