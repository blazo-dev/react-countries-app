import { useContext, useEffect, useState } from 'react'
import { CountriesContext } from '../context/countries.context'
import { getCountriesByName } from '../pages/countries/services/countries'

function useSearch () {
  const [search, setSearch] = useState('')
  const { countries, setFilteredCountries } = useContext(CountriesContext)
  useEffect(() => {
    const searchedCountries = getCountriesByName(search, countries)
    setFilteredCountries(searchedCountries)
  }, [search])

  return { setSearch }
}

export default useSearch
