import { useCallback, useContext, useState } from 'react'
import { getAllCountries } from '../pages/countries'
import { CountriesContext } from '../context/countries.context'

function useCountries () {
  const { setCountries, filteredCountries, setFilteredCountries } = useContext(CountriesContext)
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

  return { filteredCountries, getCountries, isLoading, error }
}

export default useCountries
