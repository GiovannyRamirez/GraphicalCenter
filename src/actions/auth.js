import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import { setError } from './ui'

// export const loginEmailPassword = (email, password) => {
//   return (dispatch) => {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(({ user }) => {
//         dispatch(login(user.id, user.displayName))
//       })
//       .catch( err => {
//         console.log(err)
//       })
//   }
// }

export const registerEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async ({ user }) => {
       await user.updateProfile({ displayName: name })
        dispatch(login(user.id, user.displayName))
      })
      .catch( err => {
        dispatch(setError(err.code))
      })
  }
}

export const googleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
      })
  }
}

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    }
  }
}