import './CountryCard.scss'

import Link from '../../../../components/router/link/Link'

function CountryCard ({ country }) {
  return (
    <article className='card'>
      <header>
        <img
          className='card__image'
          src={country.flags.svg}
          alt={country.flags.alt}
        />
      </header>
      <main className='card__body'>
        <Link className='card__title' href={`countries/${country.alphaCode}`}>{country.name.common}</Link>
        <ul className='card__list'>
          <li className='card__list-item'>
            <strong className='card__list-item-title'>Population:</strong>
            {country.population.toLocaleString()}
          </li>
          <li className='card__list-item'>
            <strong className='card__list-item-title'>Region:</strong>
            {country.region}
          </li>
          <li className='card__list-item'>
            <strong className='card__list-item-title'>Capital:</strong>
            {country.capital}
          </li>
        </ul>
      </main>
    </article>
  )
}

export default CountryCard
