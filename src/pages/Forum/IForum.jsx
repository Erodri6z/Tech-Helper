
import PostForm from "../../components/Postform/PostForm"

const IForum = (props) => {
  const posts = props.posts
  const iosPosts = posts.filter(p => p.os === 'IOS')
  return (
    <>
    <h1>IOS Forum</h1>
    <PostForm handleAddPost={props.handleAddPost}/>
      {posts.map(p => 
      <div key={p._id}>
        <h3>{p.poster.name}</h3>
        <h4>{p.question}</h4>
        <p>{p.elaboration}</p>
      </div>
      )}
    </>
  )
}

export default IForum