import { data } from '../../mocked'
import { AgencyCard } from './AgencyCard'

export function Agencies () {

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
            <AgencyCard key={agency.id} />
          )
        })
      }
    </div>
  )
}
