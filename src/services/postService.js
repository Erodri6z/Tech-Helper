import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`

async function getAll() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization' : `Bearer ${tokenService.getToken()}`}
  })
  return await res.json()
}

async function create(post) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  return await res.json()
}

async function deletePost(postId) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: 'DELETE',
    headers: { 'Authorization' : `Bearer ${tokenService.getToken()}`}
  })
  return await res.json()
}

async function getPost(postId) {
  const res = await fetch(`${BASE_URL}/${postId}`,{
    headers: { Authorization: `Bearer ${tokenService.getToken()}`},
  })
  return await res.json()
}

async function updatePost(postData) {
  const res = await fetch(`${BASE_URL}/${postData._id}`,{
    method : 'PUT',
    headers : {
      'Authorization' : `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(postData)
  })
  return await res.json()
}

async function createComment(postId, formData) {
  const res = await fetch(`${BASE_URL}/${postId}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-type' : "application/json"
    },
    body: JSON.stringify(formData)
  })
  return await res.json()
}

async function deleteComment(postId, commentId) {
  const res = await fetch(`${BASE_URL}/${postId}/${commentId}`,{
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type' : 'application/json'
    },
  })
  return await res.json()
}

export {
  getAll,
  create,
  getPost,
  deletePost,
  updatePost,
  createComment,
  deleteComment
}