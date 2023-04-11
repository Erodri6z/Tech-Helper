import PostForm from "../../components/Postform/PostForm"
import { Link } from "react-router-dom"
import './Forum.css'

const AForum = (props) => {
  const posts = props.posts
  const androidPosts = posts.filter(p => p.os === 'ANDROID')
  const maxLength = 250
  return (
    <>
    <h1>Android Forum</h1>
    <div className="forum">
    { props.user ?
    <PostForm handleAddPost={props.handleAddPost}/>
    :
    <h4>Want to post?</h4>
  }
    {androidPosts.map(p => 
    <Link to='/post' key={p._id} className='post-link' state={{ p }}>
      <div key={p._id} className='a-post'>
        <div className="post-header">
          <h3>{p.poster.name} Asks : "{p.question}"</h3>
        </div>
        <div className="question">
          {p.elaboration.length > maxLength ?
          <p>{p.elaboration.substring(0, maxLength)}...</p>
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


export default AForum