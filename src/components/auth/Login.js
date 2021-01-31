import { Link } from 'react-router-dom'

export function Login () {
  return (
    <>
      <h3 className='auth__title'>Iniciar sesión</h3>
      <form>
        <input 
          className='auth__input'
          type='email'
          placeholder='Correo electrónico'
          name='email'
          autoComplete='off'
        />
        <input 
          className='auth__input'
          type='password'
          placeholder='Contraseña'
          name='password'
        />
        <button
          className='btn btn-primary' 
          type='submit'
        > Iniciar sesión 
        </button>

        <div className='auth__external'>
          <div className='google-btn'>
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
