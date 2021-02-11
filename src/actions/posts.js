import Swal from 'sweetalert2'
import { db } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import { loadPosts } from '../utils/loadPosts'
import { fileUpload } from '../utils/fileUpload'

export const startNewPost = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const newPost = {
      title: '',
      description: '',
      date: new Date().getTime()
    }

    const doc = await db.collection(`${ uid }/activity/posts`).add(newPost)
    dispatch(activePost(doc.id, newPost))
    dispatch(addNewPost(doc.id, newPost))

  }
}

export const activePost = (id, post) => ({
  type: types.postsActive,
  payload: {
    id,
    ...post
  }
})

export const addNewPost = (id, post) => ({
  type: types.postsNew,
  payload: {
    id,
    ...post,
  }
})

export const startLoadPosts = (uid) => {
  return async (dispatch) => {
    const posts = await loadPosts(uid)
    dispatch(setPosts(posts))
  }
}

export const setPosts = (posts) => ({
  type: types.postsLoad,
  payload: posts
})

export const startSavePost = (post) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    if(!post.url) {
      delete post.url
    }

    const postToFirestore = { ...post }
    delete postToFirestore.id
    await db.doc(`${uid}/activity/posts/${post.id}`).update(postToFirestore)

    dispatch(refreshPost(post.id, post))
    Swal.fire('Publicación guardada', post.title, 'success')
  }
}

export const refreshPost = (id, post) => ({
  type: types.postsUpdate,
  payload: {
    id,
    post: {
      id,
      ...post,
    },
  }
})

export const startUpload = (file) => {
  return async (dispatch, getState) => {
    const { active } = getState().posts

    Swal.fire({
      title: 'Subiendo imagen',
      text: 'Por favor espere',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    const fileUrl = await fileUpload(file)
    active.url = fileUrl

    dispatch(startSavePost(active))

    Swal.close()
  }
}

export const startDelete = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    await db.doc(`${uid}/activity/posts/${id}`).delete()

    dispatch(deletePost(id))
    Swal.fire({
      text: 'Publicación eliminada',
      icon: 'success'
    })
  }
}

export const deletePost = (id) => ({
  type: types.postsDelete,
  payload: id,
})

export const logoutPosts = () => ({
  type: types.postsLogout,
})
