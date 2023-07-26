import { useCallback, useContext, useState } from 'react'
import { getAllCountries, getCountryByCode } from '../pages/countries'
import { CountriesContext } from '../context/countries.context'

function useCountries () {
  const {
    countries,
    setCountries,
    filteredCountries,
    setFilteredCountries,
    setCountry,
    country
  } = useContext(CountriesContext)
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

  const getCountry = useCallback((countryCode) => {
    try {
      setIsLoading(true)
      setError(null)
      const newCountry = getCountryByCode(countryCode, countries)
      setCountry(newCountry)
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const getCountryName = useCallback((countryCode) => {
    try {
      setIsLoading(true)
      setError(null)
      const newCountry = getCountryByCode(countryCode, countries)
      return newCountry.name.common
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    country,
    getCountry,
    getCountryName,
    filteredCountries,
    getCountries,
    isLoading,
    error
  }
}

export default useCountries
