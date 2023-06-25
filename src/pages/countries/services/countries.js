export async function getAllCountries () {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
    return countries.map(
      (country) => {
        let languages = []
        let nativeNames = {}

        if (country.languages) {
          languages = Object.values(country.languages)
        }

        if (country.name.nativeName) {
          nativeNames = Object.values(country.name.nativeName)[0]
        }

        return {
          name: country.name,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          topLevelDomain: country.tld,
          currencies: country.currencies,
          languages,
          nativeNames,
          borders: country.borders,
          alphaCode: country.cca3,
          flags: country.flags
        }
      }
    )
  } catch (e) {
    console.log(e)
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
