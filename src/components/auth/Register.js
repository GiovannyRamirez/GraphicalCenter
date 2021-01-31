import { Link } from 'react-router-dom'

export function Register () {
  return (
    <>
      <h3 className='auth__title'>Registrarme</h3>
      <form>
        <input 
          className='auth__input'
          type='text'
          placeholder='Nombre'
          name='email'
          autoComplete='off'
        />
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
        <input 
          className='auth__input'
          type='password'
          placeholder='Confirmar contraseña'
          name='passwordConf'
        />
        <button
          className='btn btn-primary' 
          type='submit'
        > Register 
        </button>
        
        <Link to='/auth/login'
          className='link'
        > Ya estoy registrado
        </Link>
      </form>
    </>
  )
}
