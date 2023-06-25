export async function getAllCountries () {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
    return countries.map(
      (country) => {
        return {
          name: country.name,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          topLevelDomain: country.topLevelDomain,
          currencies: country.currencies,
          languages: country.languages,
          borders: country.borders,
          alphaCode: country.cca2,
          flags: country.flags
        }
      }
    )
  } catch (e) {
    throw new Error('Error fetching countries')
  }
}

export function getCountryByCode (countryCode, countries) {
  const country = countries.find((country) => country.alphaCode === countryCode)
  return country || null
}

export function getCountriesByName (countryName, countries) {
  const searchedCountries = countries.filter(country => {
    return country.name.common.toLowerCase().includes(countryName.toLowerCase())
  })
  return searchedCountries
}
