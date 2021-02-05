import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'

export function AuthRouter () {

  const { uid } = useSelector(state => state.auth)
  const history = useHistory()

  if (uid) {
    history.push('/')
  }

  return (
    <div className='auth__main'>
      <div className='auth__box-container'>
        <Switch>
          <Route exact path='/auth/login' component={ Login } />
          <Route exact path='/auth/register' component={ Register } />
          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </div>
  )
}
