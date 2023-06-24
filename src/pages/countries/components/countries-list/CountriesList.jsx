import CountryCard from '../country-card/CountryCard'
import './CountriesList.scss'

function CountriesList ({ countries }) {
  return (
    <div className='countries__list'>
      {countries.map((country) => (<CountryCard key={country.alphaCode} country={country} />))}
    </div>
  )
}

export default CountriesList
