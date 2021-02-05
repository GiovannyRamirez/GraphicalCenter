import { Route, Redirect } from 'react-router-dom'

export function PrivateRoute(props) {  

  if(!props.isAuth) return <Redirect to="/auth/login" />

  return <Route {...props } />
}
