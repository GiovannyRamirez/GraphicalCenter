import { db } from '../firebase/firebaseConfig'

export async function loadAgencies () {
  const agenciesSnap = await db.collection('users').get()  
  const agencies = []

  agenciesSnap.forEach(snapChildren => {    
    agencies.push({
      id: snapChildren.id,
      ...snapChildren.data()
    })
  })

  return agencies
}