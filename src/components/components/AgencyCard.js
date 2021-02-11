

export function AgencyCard ({ city, phone }) {

  return (
    <div className='card__agency pointer'>
      <div className='card__agency-image'>
      </div>
      <h3>Nombre</h3>
      <p>{ phone }</p>
      <p>{ city }</p>
    </div>
  )
}
