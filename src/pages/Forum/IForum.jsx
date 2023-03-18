import PostForm from "../../components/Postform/PostForm"

const IForum = (props) => {
  return (
    <>
    <h1>IOS Forum</h1>
    <PostForm handleAddPost={props.handleAddPost}/>
    </>
  )
}

export default IForum