import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebaseConfig'
import { AuthRouter } from './AuthRouter'
import { Home } from '../components/view/Home' 
import { login } from '../actions/auth'

export function AppRouter () {

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
      }
    })
  },[dispatch])

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/auth' component={ AuthRouter } />
          <Route exact path='/' component={ Home } />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  )
}
