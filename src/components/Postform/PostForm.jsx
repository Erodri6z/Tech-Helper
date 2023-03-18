
import React, { useState } from 'react'

const PostForm = (props) => {
  const [formData, setFormData] = useState({
    question: '',
    elaboration:'',
    os: ''
  })

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
    <div className="post-entry">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          <p>Whats on your mind?</p>
        </label>
        <input type="text" name="question" id="question-box" onChange={handleChange}/>
        <label>
          <p>Elaborate</p>
        </label>
        <input type="text" name="elaboration" is="elaboration-box" onChange={handleChange}/>
        <select name="os" id="os-select" onChange={handleChange}>
          <option value="IOS">IOS</option>
          <option value="ANDROID">Android</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )

}

export default PostForm