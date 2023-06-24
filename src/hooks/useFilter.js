import { useContext, useEffect } from 'react'
import { CountriesContext } from '../context/countries.context'

function useFilter () {
  const { filters, setFilters, setFilteredCountries, countries } = useContext(CountriesContext)

  useEffect(() => {
    const newCountries = countries.filter((country) => {
      const { region } = filters

      const countrySameRegion = region === 'All' || country.region === region
      return countrySameRegion
    })

    setFilteredCountries(newCountries)
  }, [filters])

  return { filters, setFilters }
}

export default useFilter
