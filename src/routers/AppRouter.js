import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { Home } from '../components/view/Home' 

export function AppRouter () {
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
