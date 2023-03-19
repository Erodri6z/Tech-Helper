import PostForm from "../../components/Postform/PostForm"
import { Link } from "react-router-dom"

const AForum = (props) => {
  const posts = props.posts
  const androidPosts = posts.filter(p => p.os === 'ANDROID')
  return (
    <>
    <h1>Android Forum</h1>
    <PostForm handleAddPost={props.handleAddPost}/>
    {posts.map(p => 
    <Link to='/post' key={p._id} state={{ p }}>
      <div key={p._id}>
        <h3>{p.poster.name}</h3>
        <h4>{p.question}</h4>
        <p>{p.elaboration}</p>
      </div>
    </Link>
    )}
    </>
  )
}


export default AForum