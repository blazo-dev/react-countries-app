import { Countries } from '../countries'
import CountriesProvider from '../../context/countries.context'
import './HomePage.scss'

function HomePage () {
  return (
    <CountriesProvider>
      <main className='main'>
        <Countries />
      </main>
    </CountriesProvider>
  )
}

export default HomePage
