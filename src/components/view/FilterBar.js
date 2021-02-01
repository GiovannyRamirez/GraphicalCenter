import { Link } from 'react-router-dom'

export function FilterBar () {
  return (
    <aside className='home__filter-aside'>
      <div>
        <h3 className='home__title'>
          Búsqueda detallada
        </h3>
        <div className='home__filter'>
          <label 
            htmlFor='search'
          >
            Ingresa tu criterio de búsqueda
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
          <label htmlFor='pendon'> Calcomanías</label><br />
          <input 
            type='checkbox'
            name='mug'
          />
          <label htmlFor='pendon'> Mugs</label><br />        
        </div>
        <div className='home__filter'>
          <Link to='/auth/login'
            className='link'
          > Soy un negocio
          </Link>
        </div>
      </div>
    </aside>
  )
}
