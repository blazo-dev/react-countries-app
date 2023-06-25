import Router from '../../components/router/Router'
import CountriesProvider from '../../context/countries.context'
import Page404 from '../Page404/Page404'
import { Countries } from '../countries'
import CountryPage from '../countries/pages/CountryPage'
import './HomePage.scss'
import Home from './components/Home'

const routes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/countries',
    Component: Countries
  },
  {
    path: '/countries/:countryCode',
    Component: CountryPage
  }
]

function HomePage () {
  return (
    <CountriesProvider>
      <main className='main'>
        <Router routes={routes} defaultComponent={Page404} />
      </main>
    </CountriesProvider>
  )
}

export default HomePage
