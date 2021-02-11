import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { PostBar } from '../components/PostBar'
import { activePost, startDelete } from '../../actions/posts'

export function PostScreen () {

  const { active } = useSelector(state => state.posts)

  const [formValues, handleInputChange, reset] = useForm(active)

  const { title, description } = formValues

  const activeId = useRef(active.id)
  useEffect(() => {
    if(active.id !== activeId.current) {
      reset(active)
      activeId.current = active.id
    }
  }, [active, reset])

  const handleDelete = () => {
    dispatch(startDelete(active.id))
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(activePost(formValues.id, { ...formValues }))
  }, [formValues, dispatch])

  return (
    <div className='post__main-content'>
      <PostBar />
      <div className='post__content'>
        <input 
          type='text'
          placeholder='Título'
          className='post__title-input mt-1'
          name='title'
          value={ title }
          onChange={ handleInputChange }
        />
        <textarea 
          placeholder='Descripción'
          className='post__description mt-1'
          name='description'
          value={ description }
          onChange={ handleInputChange }
        ></textarea>
        {
          active.url &&
          <div className='post__image mt-1'>
            <img
              src={ active.url }
              alt='Imagen'
            />
          </div>
        }
      </div>
      <button
        className='btn btn-danger'
        onClick={ handleDelete }
      >
        Eliminar
      </button>
    </div>
  )
}