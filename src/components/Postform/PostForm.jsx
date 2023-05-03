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


  const checkProfanity = (formData) => {
    const lowerCaseText = formData.toLowerCase()
    const hasProfanity = PROFANITY_LIST.some((profanity) => {
      return lowerCaseText.includes(profanity)
    })
    return hasProfanity
  }

  
  const handleSubmit = (e) => {
    e.target.reset()
    e.preventDefault()
    try{
      if ((checkProfanity(formData.question)) || (checkProfanity(formData.elaboration))){
        alert('this cant be posted, potty mouth')
      }else {
        props.handleAddPost(formData)
      }
    }catch (err) {
      console.log(err)
    }
  }

  return(
    <div className="post-entry off-mode">
      <button id="hide-entry" onClick={props.btnToggle}>X</button>
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