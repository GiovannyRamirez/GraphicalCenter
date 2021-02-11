import { useDispatch, useSelector } from 'react-redux'
import { startSavePost, startUpload } from '../../actions/posts'
import moment from 'moment'
import 'moment/locale/es'

export function PostBar () {

  moment.locale('es')
  const today = new Date()
  const date = moment(today).format('MMMM D YYYY')

  const dispatch = useDispatch()
  const { active } = useSelector(state => state.posts)

  const handleSave = () => {
    dispatch(startSavePost(active))
  }

  const handleImageClick = () => {
    document.querySelector('#fileSelector').click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if(file) {
      dispatch(startUpload(file))
    }
  }

  return (
    <div className='post__bar'>
      <>
        <span>{ date }</span>
        <input
          id='fileSelector'
          type='file'
          name='image'
          style={{ display: 'none' }}
          onChange={ handleFileChange }
        />
        <button 
          className='btn'
          onClick={ handleImageClick }
        >
          Imagen
        </button>
        <button 
          className='btn'
          onClick={ handleSave }
        >
          Guardar
        </button>
      </>
    </div>
  )
}