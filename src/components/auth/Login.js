import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm' 
import { setError, removeError } from '../../actions/ui'
import { googleLogin, loginEmailPassword } from '../../actions/auth'

export function Login () {

  const [formValues, handleInputChange] = useForm({
    email: 'giovannyramirezs@hotmail.com',
    password: 'g1oVRz',
  })

  const dispatch = useDispatch()

  const { msgError, loading } = useSelector(state => state.ui)

  // Pass at least 6 char with 1 digit, 1 lowercase, 1 uppercase
  const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
  // Mail with @ and finished with at least 2 char
  const regExMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  
  const isFormValid = () => {
    if (!password.match(regExPass)) {
      dispatch(setError('Contraseña no cumple requisitos'))
      return false
    } else if (!email.match(regExMail)) {
      dispatch(setError('Email inválido'))
      return false
    }
    dispatch(removeError())
    return true
  }

  const handleLogin = e => {
    e.preventDefault()
    if (isFormValid) {
      dispatch(loginEmailPassword(email, password))
    }
  }

  const handleGoogleLogin = () => {
    dispatch(googleLogin())
  }

  const { email, password } = formValues

  return (
    <>
      <h3 className='auth__title'>Iniciar sesión</h3>

      {
        msgError &&
        <div className='auth__alert-error'>
          { msgError }
        </div>
      }

      <form onSubmit={ handleLogin }>
        <input 
          className='auth__input'
          type='text'
          placeholder='Correo electrónico'
          name='email'
          value={ email }
          onChange={handleInputChange}
          autoComplete='off'
        />
        <input 
          className='auth__input'
          type='password'
          placeholder='Contraseña (Mín. 6: 1num & 1min & 1may)'
          name='password'
          value={ password }
          onChange={handleInputChange}
        />
        <button
          className='btn btn-primary' 
          type='submit'
          disabled= { loading }
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
