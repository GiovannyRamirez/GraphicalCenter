import { data } from '../../mocked'
import { Post } from './Post'

export function Posts () {

  const agencies = data

  return (
    <div className='home__container'>      
      {
        agencies && agencies.length === 0 &&
          <h1>No Data Available</h1>
      }
      {
        agencies && agencies.length > 0 &&
        agencies.map(agency => {
          return (
            <Post key={agency.id} />
          )
        })
      }
    </div>
  )
}
