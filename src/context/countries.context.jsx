import { createContext, useMemo, useState } from 'react'

export const CountriesContext = createContext()

export default function CountriesProvider ({ children }) {
  const [filters, setFilters] = useState({ region: 'All' })
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState([])

  return (
    <CountriesContext.Provider
      value={useMemo(
        () => ({
          filters,
          setFilters,
          countries,
          setCountries,
          filteredCountries,
          setFilteredCountries,
          country,
          setCountry
        }),
        [filters, countries, filteredCountries, country]
      )}
    >
      {children}
    </CountriesContext.Provider>
  )
}
