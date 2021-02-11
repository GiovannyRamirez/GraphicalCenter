import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import { setError, startLoading, finishLoading } from './ui'
import { logoutPosts } from './posts'
import { cleanAgency } from './agency'

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading())
        Swal.fire('Bienvenido', user.displayName, 'success')
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
        Swal.fire('Bienvenido', user.displayName, 'success')
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
        Swal.fire('Bienvenido', user.displayName, 'success')
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
    dispatch(logoutPosts())
    dispatch(cleanAgency())
  }
}

export const logout = () => {
  return {
    type: types.logout
  }
}
