export async function getAllCountries () {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const countries = await response.json()
    return countries.map(
      (country) => {
        let languages = []
        let nativeNames = {}
        let currencies = []

        if (country.languages) {
          const languagesValue = Object.values(country.languages)
          languages = languagesValue.join(', ')
        }

        if (country.name.nativeName) {
          nativeNames = Object.values(country.name.nativeName)[0]
        }

        if (country.currencies) {
          const currenciesValues = Object.values(country.currencies)
          currencies = currenciesValues.map(currency => currency.name).join(', ')
        }

        return {
          name: country.name,
          population: country.population,
          region: country.region,
          subregion: country.subregion,
          capital: country.capital,
          topLevelDomain: country.tld,
          languages,
          nativeNames,
          currencies,
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
