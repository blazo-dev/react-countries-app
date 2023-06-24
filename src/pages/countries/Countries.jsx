import { useEffect } from 'react'
import { CountriesList } from '.'
import { FilterSelector, SearchBar } from '../../components'
import { useCountries } from '../../hooks'
import './Countries.scss'

function Countries () {
  const { filteredCountries, getCountries } = useCountries()

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <section className='countries'>
      <header className='countries__header'>
        <SearchBar />
        <FilterSelector />
      </header>
      {filteredCountries.length > 0
        ? (
          <CountriesList countries={filteredCountries} />
          )
        : (
          <h2>No countries found</h2>
          )}
    </section>
  )
}

export default Countries
