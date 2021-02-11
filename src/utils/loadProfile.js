import { db } from '../firebase/firebaseConfig'

export async function loadProfile (uid) {
  const profileSnap = await db.collection(`users/${uid}/profile`).get()  
  const profile = []

  profileSnap.forEach(snapChildren => {    
    profile.push({
      id: snapChildren.id,
      ...snapChildren.data()
    })
  })

  return profile
}