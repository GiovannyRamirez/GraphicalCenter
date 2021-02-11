import { useDispatch } from 'react-redux'
import { activePost } from '../../actions/posts'
import moment from 'moment'
import 'moment/locale/es'

export function Post ({ id, title, description, date, url }) {

  moment.locale('es')
  const postDate = moment(date)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(activePost(id, {
      date, title, description, url
    }))
  }
  
  return (
    <div 
      className='post__entry pointer'
      onClick={ handleClick }
    >
      {
        url &&
        <div 
          className='post__entry-image'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`
          }}     
        >
        </div>
      }
      <div className='post__entry-body'>
        <p className='post__entry-title'>
          { title }
        </p>
        <p className='post__entry-content'>
          { description }
        </p>
      </div>
      <div className='post__date'>
        <span>{ postDate.format('dddd') }</span>
        <h4>{ postDate.format('D') }</h4>
      </div>
    </div>
  )
}
  