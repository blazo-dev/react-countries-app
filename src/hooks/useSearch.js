import { useContext, useEffect, useState } from 'react'
import { CountriesContext } from '../context/countries.context'

function useSearch () {
  const [search, setSearch] = useState('')
  const { countries, setFilteredCountries } = useContext(CountriesContext)

  useEffect(() => {
    const searchedCountries = countries.filter(country => {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredCountries(searchedCountries)
  }, [search])

  return { setSearch }
}

export default useSearch
