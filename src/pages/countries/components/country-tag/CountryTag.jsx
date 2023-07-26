import { useEffect, useState } from 'react'
import { useCountries } from '../../../../hooks'
import Link from '../../../../components/router/link/Link'

function CountryTag ({ countryCode }) {
  const { getCountryName, getCountry } = useCountries()
  const [countryName, setCountryName] = useState()

  const handleGetCountry = (country = countryCode) => {
    getCountry(country)
  }

  useEffect(() => {
    setCountryName(getCountryName(countryCode))
  }, [])

  return (
    <li
      className='country__border'
      key={countryName}
      onClick={() => handleGetCountry(countryCode)}
    >
      <Link
        className='app__button country__border-link'
        href={`/${countryCode}`}
      >
        {countryName}
      </Link>
    </li>
  )
}

export default CountryTag
