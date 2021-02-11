import { useSelector } from 'react-redux'
import { AgencyCard } from './AgencyCard'

export function Agencies () {

  const { agencies } = useSelector(state => state.agencies)

  return (
    <div className='home__container'>      
      {
        agencies && agencies.length === 0 &&
          <h1>No hay agencias registradas</h1>
      }
      {
        agencies && agencies.length > 0 &&
        agencies.map(agency => {
          return (
            <AgencyCard 
              key={agency.id}
              {...agency}
            />
          )
        })
      }
    </div>
  )
}
