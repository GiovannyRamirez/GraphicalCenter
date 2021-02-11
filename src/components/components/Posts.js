import { useSelector } from 'react-redux'
import { Post } from './Post'

export function Posts () {

  const { posts } = useSelector(state => state.posts)

  return (
    <div className='home__container'>      
      {
        posts && posts.length === 0 &&
          <h1>No hay publicaciones</h1>
      }
      {
        posts && posts.length > 0 &&
        posts.map(post => {
          return (
            <Post 
              key={post.id}
              {...post}
            />
          )
        })
      }
    </div>
  )
}
