import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { updateData }  from '../../actions/agency'

export function UpdateForm () {

  const dispatch = useDispatch()

  const { active } = useSelector(state => state.agencies)

  const [formValues, handleInputChange] = useForm({
  city: active.city,
  phone: active.phone,
  address: active.address,    
  })

  const handleUpdate = (e) => { 
    e.preventDefault()   
    dispatch(updateData(city, address, phone)) 
  }

  const { city, phone, address } = formValues

  return (
    <div className='home__filter'>
      <form onSubmit={ handleUpdate }>
        <input 
          className='auth__input'
          type='text'
          placeholder='Ciudad'
          name='city'
          value={ city }
          onChange={ handleInputChange }
          autoComplete='off'
        />
        <input 
          className='auth__input'
          type='text'
          placeholder='Teléfono'
          name='phone'
          value={ phone }
          onChange={ handleInputChange }
          autoComplete='off'
        />
        <input 
          className='auth__input'
          type='text'
          placeholder='Dirección'
          name='address'
          value={ address }
          onChange={ handleInputChange }
        />        
        <div className='update__center'>
          <button
            className='btn btn-primary' 
            type='submit'          
          > Actualizar 
          </button>
        </div>        
      </form>
    </div>
  )
}
