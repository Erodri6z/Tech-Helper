import { Link } from "react-router-dom"
import PostForm from "../../components/Postform/PostForm"

import './Forum.css'

const IForum = (props) => {
  const posts = props.posts
  const iosPosts = posts.filter(p => p.os === 'IOS')
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
      <Link to='/post' key={p._id} state={{ p }}>
      <div key={p._id} className='i-post'>
        <h3>{p.poster.name} Asks:</h3>
        <h4>{p.question}</h4>
        <p>{p.elaboration}</p>
      </div>
      <hr />
    </Link>
      )}
    </div>
    </>
  )
}

export default IForum