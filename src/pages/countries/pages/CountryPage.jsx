import { useEffect } from 'react'
import { useCountries } from '../../../hooks'
import Link from '../../../components/router/link/Link'
import './CountryPage.scss'
function CountryPage ({ countryCode }) {
  const { country, getCountry, getCountries } = useCountries()

  const handleGetCountry = (country = countryCode) => {
    getCountry(country)
  }
  useEffect(() => {
    getCountries()
    handleGetCountry()
  }, [])

  return (
    <section className='country'>
      <Link className='country__button app__button' href='/countries'>
        <i className='fa-solid fa-arrow-left-long' /> Back
      </Link>
      {country && (
        <div className='country__content'>
          <header className='country__header'>
            <img
              className='country__flag'
              src={country.flags.svg}
              alt={country.flags.alt}
            />
          </header>
          <div className='country__details'>
            <h2 className='country__name'>{country.name.common}</h2>
            <div className='country__detail__separator'>
              <p className='country__detail'>
                <strong className='country__strong'>Native name: </strong>
                {country.nativeNames.official}
              </p>
              <p className='country__detail'>
                <strong className='country__strong'>Population: </strong>
                {country.population.toLocaleString()}
              </p>
              <p className='country__detail'>
                <strong className='country__strong'>Region: </strong>
                {country.region}
              </p>
              <p className='country__detail'>
                <strong className='country__strong'>Sub Region: </strong>
                {country.subregion}
              </p>
              <p className='country__detail'>
                <strong className='country__strong'>Capital: </strong>
                {country.capital}
              </p>
            </div>
            <div className='country__detail__separator'>
              <p className='country__detail'>
                <strong className='country__strong'>Top Level Domain: </strong>
                {country.topLevelDomain}
              </p>
              <p className='country__detail'>
                <strong className='country__strong'>Languages: </strong>
                {country.languages.map((language) => (
                  <span key={language}>{language}</span>
                ))}
              </p>
            </div>
            {country.borders && (
              <div className='country__detail__separator'>
                <h3 className='country__borders__title'>Borders Countries:</h3>
                <ul className='country__borders'>
                  {country.borders.map((border) => (
                    <li
                      className='country__border'
                      key={border}
                      onClick={() => handleGetCountry(border)}
                    >
                      <Link
                        className='app__button country__border-link'
                        href={`/countries/${border}`}
                      >
                        {border}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      {!country && (
        <h3>Country not found, please go back to countries and try again.</h3>
      )}
    </section>
  )
}

export default CountryPage
