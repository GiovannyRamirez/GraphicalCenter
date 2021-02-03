import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types'

// export const loginEmailPassword = (email, password) => {
//   return (dispatch) => {

//   }
// }

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