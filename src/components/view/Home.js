import { FilterBar } from './FilterBar'
import { Agencies } from '../components/Agencies'

export function Home () {
  
  return (
    <div className='home__main-content'>
      <FilterBar />
      <>
        <Agencies />
      </>
    </div>
  )
}
