import { useContext, useEffect } from 'react'
import { CountriesContext } from '../context/countries.context'

function useFilter () {
  const { filters, setFilters, setFilteredCountries, countries } = useContext(CountriesContext)

  useEffect(() => {
    const newCountries = countries.filter((country) => {
      const { region } = filters

      return region === 'All' || country.region === region
    })

    setFilteredCountries(newCountries)
  }, [filters])

  return { filters, setFilters }
}

export default useFilter
