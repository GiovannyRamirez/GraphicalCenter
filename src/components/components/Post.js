export function Post () {
  
  return (
    <div className='post__entry pointer'>
      <div 
        className='post__entry-image'
        style={{
          backgroundSize: 'cover',
          backgroundColor: 'red'
        }}     
      >
      </div>
      <div className='post__entry-body'>
        <p className='post__entry-title'>
          Nuevo Post
        </p>
        <p className='post__entry-content'>
          Algo acerca del universo
        </p>
      </div>
      <div className='post__date'>
        <span>Lunes</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
  