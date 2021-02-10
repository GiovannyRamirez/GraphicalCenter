import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { NothingSelected } from '../components/NothingSelected'
import { PostScreen } from '../components/PostScreen'
import { startNewPost } from '../../actions/posts'

export function SideBar () {

  const { name } = useSelector(state => state.auth)
  const { active } = useSelector(state => state.posts)

  const dispatch = useDispatch()
  
  const handleAddPost  = () => {
    dispatch(startNewPost())
  }

  return (
    <aside className='home__filter-aside'>
      <div>
        <div className='mb-5'>
          <div className='home__filter'>
            <h4 className='home__title'>
              {name}
            </h4>
          </div>
          <div className='home__title'>
            <Link to='/'
              className='link'
            > Ir al Inicio
            </Link>
          </div>
          <hr className='mt-1'/>
        </div>
        <div onClick={ handleAddPost }>
          <h3
            className='post__new-post pointer'
          >
            + Nueva publicación
          </h3>
        </div>
        {
          active ?
            <PostScreen /> :
            <NothingSelected />
        }
      </div>
    </aside>
  )
}
