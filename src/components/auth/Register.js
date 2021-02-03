import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm' 
import { setError, removeError } from '../../actions/ui'
import { registerEmailPassword } from '../../actions/auth'

export function Register () {

  const dispatch = useDispatch()

  const { msgError } = useSelector( state => state.ui )

  const [formValues, handleInputChange] = useForm({
    name: 'Giovanny',
    email: 'giovannyramirezs@hotmail.com',
    password: 'g1oVRz',
    passwordConf: 'g1oVRz',
  })

  const handleRegister = e => {
    e.preventDefault()
    if (isFormValid()) {
      dispatch(registerEmailPassword(email, password))
    } 
  }

  // Pass at least 5 char with 1 digit, 1 lowercase, 1 uppercase
  const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
  // Mail with @ and finished with at least 2 char
  const regExMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Nombre requerido'))
      return false
    } else if (password !== passwordConf) {
      dispatch(setError('Contraseñas no coinciden'))
      return false
    } else if (!password.match(regExPass) || password.length < 6) {
      dispatch(setError('Contraseña no cumple requisitos'))
      return false
    } else if (!email.match(regExMail)) {
      dispatch(setError('Email inválido'))
      return false
    }
    dispatch(removeError())
    return true
  }

  const { name, email, password, passwordConf } = formValues

  return (
    <>
      <h3 className='auth__title'>Registrarme</h3>
      
      {
        msgError &&
        <div className='auth__alert-error'>
          { msgError }
        </div>
      }

      <form onSubmit={ handleRegister }>
        <input 
          className='auth__input'
          type='text'
          placeholder='Nombre'
          name='name'
          value={ name }
          onChange={ handleInputChange }
          autoComplete='off'
        />
        <input 
          className='auth__input'
          type='text'
          placeholder='Correo electrónico'
          name='email'
          value={ email }
          onChange={ handleInputChange }
          autoComplete='off'
        />
        <input 
          className='auth__input'
          type='password'
          placeholder='Contraseña (Mín. 6: 1num & 1min & 1may)'
          name='password'
          value={ password }
          onChange={ handleInputChange }
        />
        <input 
          className='auth__input'
          type='password'
          placeholder='Confirmar contraseña'
          name='passwordConf'
          value={ passwordConf }
          onChange={ handleInputChange }
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
