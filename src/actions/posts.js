import { db } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import { loadPosts } from '../utils/loadPosts'

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

  }
}

export const activePost = (id, post) => ({
  type: types.postsActive,
  payload: {
    id,
    ...post
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