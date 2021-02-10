import { db } from '../firebase/firebaseConfig'

export async function loadPosts (uid) {
  const postsSnap = await db.collection(`${uid}/activity/posts`).get()
  const posts = []

  postsSnap.forEach(snapChildren => {
    posts.push({
      id: snapChildren.id,
      ...snapChildren.data()
    })
  })

  return posts
}