import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm' 
import { googleLogin } from '../../actions/auth'

export function Login () {

  const [formValues, handleInputChange] = useForm({
    email: 'giovannyramirezs@hotmail.com',
    password: '1234'
  })

  const dispatch = useDispatch()

  const handleLogin = e => {
    e.preventDefault()
  }

  const handleGoogleLogin = () => {
    dispatch(googleLogin())
  }

  const { email, password } = formValues

  return (
    <>
      <h3 className='auth__title'>Iniciar sesión</h3>
      <form onSubmit={ handleLogin }>
        <input 
          className='auth__input'
          type='email'
          placeholder='Correo electrónico'
          name='email'
          value={ email }
          onChange={handleInputChange}
          autoComplete='off'
        />
        <input 
          className='auth__input'
          type='password'
          placeholder='Contraseña'
          name='password'
          value={ password }
          onChange={handleInputChange}
        />
        <button
          className='btn btn-primary' 
          type='submit'
        > Iniciar sesión 
        </button>

        <div className='auth__external'>
          <div 
            className='google-btn'
            onClick={handleGoogleLogin}
          >
            <div className='google-icon-wrapper'>
              <img 
                className='google-icon' 
                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                alt='google button' />
            </div>
            <p className='btn-text'>
              <b>Iniciar sesión con Google</b>
            </p>
          </div>
        </div>
        <Link to='/auth/register'
          className='link'
        > Crear cuenta
        </Link>
      </form>
    </>
  )
}
