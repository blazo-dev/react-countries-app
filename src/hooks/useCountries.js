import { useCallback, useContext, useState } from 'react'
import { getAllCountries, getCountryByCode } from '../pages/countries'
import { CountriesContext } from '../context/countries.context'

function useCountries () {
  const { countries, setCountries, filteredCountries, setFilteredCountries } = useContext(CountriesContext)
  const [country, setCountry] = useState({ name: { common: '' } })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const getCountries = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const newCountries = await getAllCountries()
      setCountries(newCountries)
      setFilteredCountries(newCountries)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getCountry = useCallback(async (countryCode) => {
    try {
      setIsLoading(true)
      setError(null)
      const newCountry = await getCountryByCode(countryCode, countries)
      setCountry(newCountry)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { country, getCountry, filteredCountries, getCountries, isLoading, error }
}

export default useCountries
