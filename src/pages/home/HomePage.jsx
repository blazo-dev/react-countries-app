import Router from '../../components/router/Router'
import CountriesProvider from '../../context/countries.context'
import { Countries } from '../countries'
import CountryPage from '../countries/pages/CountryPage'
import Page404 from '../page404/Page404'
import './HomePage.scss'

const routes = [
  {
    path: '/',
    Component: Countries
  },
  {
    path: '/:countryCode',
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
