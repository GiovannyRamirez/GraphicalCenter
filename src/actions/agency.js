import Swal from 'sweetalert2'
import { db } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import { loadAgencies } from '../utils/loadAgencies'
import { loadProfile } from '../utils/loadProfile'

export const startLoadAgencies = () => {
  return async (dispatch, getState) => {
    const agencies = await loadAgencies()
    dispatch(setAgencies(agencies))
    const { uid } = getState().auth
    const resp = await loadProfile(uid)
    dispatch(setProfile(resp[0]))
  }
}

export const setAgencies = (agencies) => ({
  type: types.agencyLoad,
  payload: agencies
})

export const updateData = (city, address, phone) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth
    const agencyProfile = {
      name,
      city,
      address,
      phone,
    }

    const resp = await loadProfile(uid)

    if (resp.length === 0) {
      const profile = await db.collection(`users/${uid}/profile`).add(agencyProfile)
      Swal.fire('Perfil Actualizado', name, 'success')
      dispatch(setProfile(profile))
    }
    else {
      await db.doc(`users/${uid}/profile/${resp[0].id}`).update(agencyProfile)
      const response = await loadProfile(uid)      
      Swal.fire('Perfil Actualizado', name, 'success')
      dispatch(setProfile(response[0]))
    }
  }
}

export const setProfile = (profile) => ({
  type: types.agencyActive,
  payload: profile,
})

export const cleanAgency = () => ({
  type: types.agencyClean,
})
