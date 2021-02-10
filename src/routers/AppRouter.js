import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebaseConfig'
import { AuthRouter } from './AuthRouter'
import { Home } from '../components/view/Home' 
import { EditProfile } from '../components/view/EditProfile'
import { PrivateRoute } from './PrivateRoute'
import { login } from '../actions/auth'
import { startLoadPosts } from '../actions/posts'

export function AppRouter () {

  const dispatch = useDispatch()
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsAuth(true)
        dispatch(startLoadPosts(user.uid))
      } else {
        setIsAuth(false)
      }
    })
  },[dispatch, setIsAuth])

  return (
    <Router>
      <div>
        <Switch>
          <Route path='/auth' component={ AuthRouter } />
          <Route exact path='/' component={ Home } />
          <PrivateRoute isAuth={ isAuth } exact path='/edit-profile' component={ EditProfile } />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  )
}
