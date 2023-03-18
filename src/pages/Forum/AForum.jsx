import PostForm from "../../components/Postform/PostForm"

const AForum = (props) => {
  return (
    <>
    <h1>Android Forum</h1>
    <PostForm handleAddPost={props.handleAddPost}/>
    </>
  )
}

export default AForum