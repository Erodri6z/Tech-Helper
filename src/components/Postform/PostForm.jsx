import './PostForm.css'
import React, { useState } from 'react'

const PostForm = (props) => {

  const PROFANITY_LIST = ['heck', 'darn', 'frick']

  const checkPage = () => {
    console.log('this' ,window.location.href)
    if (`${window.location.href}` === 'http://localhost:3000/ios/forum') {
      return 'IOS'
    }
    else {
      return 'ANDROID'
    }
  }

  const [formData, setFormData] = useState({
    question: '',
    elaboration:'',
    os: checkPage()
  })

  const handleChange = (e) => {
    setFormData({...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async e => {
    
    const hasProfinity = PROFANITY_LIST.some(profanity => {
      return formData.toLowerCase().includes(profanity)
    })
    
    if(hasProfinity) {
      console.log('no stop swearing bro jesus')
    } else {
      e.preventDefault()
      e.target.reset()
      try{
      props.handleAddPost(formData)
    }catch (err) {
      console.log(err)
    }
    }
    
  }

  return(
    <div className="post-entry">
      <form autoComplete="off" className='form' onSubmit={handleSubmit}>
        <label>
          <p>Whats on your mind?</p>
        </label>
        <input type="text" name="question" id="question-box" onChange={handleChange}/>
        <br />
        <textarea type="text" name="elaboration" id="elaboration-box" onChange={handleChange}/>
        <br />
        <button className='submit-button'>Submit</button>
      </form>
    </div>
  )

}

export default PostForm