import { PostBar } from '../components/PostBar'

export function PostScreen () {
  return (
    <div className='post__main-content'>
      <PostBar />
      <div className='post__content'>
        <input 
          type='text'
          placeholder='Título'
          className='post__title-input mt-1'
        />
        <textarea 
          placeholder='Descripción'
          className='post__description mt-1'
        ></textarea>
        <div className='post__image mt-1'>
          <img
            src='https://www.sugraval.com/Catalogo/ArchItem/1_ArchItem/prueba-cabecera4.jpg'
            alt='Imagen'
          />
        </div>
      </div>
    </div>
  )
}