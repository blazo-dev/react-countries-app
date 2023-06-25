import { useEffect } from 'react'
import { useCountries } from '../../../hooks'
import Link from '../../../components/router/link/Link'
function CountryPage ({ countryCode }) {
  const { country, getCountry } = useCountries()

  useEffect(() => {
    getCountry(countryCode)
  }, [])

  return (
    <div className='country'>
      <h1 className='country__title'>{country.name.common}</h1>
      <Link className='country__link' href='/countries'>Back</Link>
    </div>
  )
}

export default CountryPage
