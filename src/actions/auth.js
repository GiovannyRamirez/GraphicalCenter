import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import { setError, startLoading, finishLoading } from './ui'

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading())
      })
      .catch( err => {
        dispatch(setError(err.code))
        dispatch(finishLoading())
      })
  }
}

export const registerEmailPassword = (email, password, name) => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async ({ user }) => {
       await user.updateProfile({ displayName: name })
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading())
      })
      .catch( err => {
        dispatch(setError(err.code))
        dispatch(finishLoading())
      })
  }
}

export const googleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
      })
      .catch( err => {
        dispatch(setError(err.code))
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

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch(logout())
  }
}

export const logout = () => {
  return {
    type: types.logout
  }
}
