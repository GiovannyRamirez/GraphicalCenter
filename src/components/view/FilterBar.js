import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth'

export function FilterBar () {

  const { uid, name } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

  return (
    <aside className='home__filter-aside'>
      <div>
        {
          uid &&
          <div className='mb-5'>
            <div className='home__filter'>
              <h4 className='home__title'>
                {name}
              </h4>
            </div>
            <div className='home__title'>
              <Link to='/edit-profile'
                className='link'
              > Editar mi perfil
              </Link>
            </div>
            <div className='home__filter'>
              <button
                className='btn btn-primary'
                onClick={ handleLogout }
              > Logout
              </button>
            </div>
            <hr className='mt-1'/>
          </div>
        }
        <div className='home__filter'>
          <h3 className='home__title'>
            Búsqueda detallada
          </h3>
        </div>
        <div className='home__filter'>
          <label 
            htmlFor='search'
          >
            Ciudad
          </label>
        </div>
        <div className='home__filter'>
          <input 
            className='home__search-input mt-1'
            type='text'
            placeholder='Buscar'
            name='search'
          />
        </div>
        <div className='home__filter'>
          <h3 className='home__title'>
            Me interesa
          </h3>
        </div>
        <div className='home__checkboxes'>
          <input 
            type='checkbox'
            name='design'
          />
          <label htmlFor='design'> Diseño</label><br />
          <input 
            type='checkbox'
            name='pendon'
          />
          <label htmlFor='pendon'> Pendones</label><br />
          <input 
            type='checkbox'
            name='sticker'
          />
          <label htmlFor='sticker'> Calcomanías</label><br />
          <input 
            type='checkbox'
            name='mug'
          />
          <label htmlFor='mug'> Mugs</label><br />        
        </div>
        {
          !uid && 
          <div className='home__filter'>
            <Link to='/auth/login'
              className='link'
            > Soy un negocio
            </Link>
          </div>
        }
      </div>
    </aside>
  )
}
