import { Link } from "react-router-dom"
import PostForm from "../../components/Postform/PostForm"

import './Forum.css'

const IForum = (props) => {
  const posts = props.posts
  const iosPosts = posts.filter(p => p.os === 'IOS')
  const maxLengthElaboration = 250
  const maxLengthQuestion = 75
  return (
    <>
    <h1>IOS Forum</h1>
    <div className="forum">
    { props.user ?
    <PostForm handleAddPost={props.handleAddPost}/>
    :
    <h4>Want to post?</h4>
  }
    {iosPosts.map(p => 
    <Link to='/post' key={p._id} className='post-link' state={{ p }}>
      <div key={p._id} className='a-post'>
        <div className="post-header">
          {p.question.length > maxLengthQuestion ?
          <h3 className="title">{p.poster.name} Asks : "{p.question.substring(0, maxLengthQuestion)}..."</h3>
          :
          <h3 className="title">{p.poster.name} Asks : "{p.question}"</h3>
        }
        </div>
        <div className="question">
          {p.elaboration.length > maxLengthElaboration ?
          <p>{p.elaboration.substring(0, maxLengthElaboration)}...</p>
          :
          <p>{p.elaboration}</p>
          }
        </div>
      </div>
      <hr />
    </Link>
    )}
    </div>
    </>
  )
}

export default IForum