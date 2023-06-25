import Link from '../../components/router/link/Link'
import './Page404.scss'

function Page404 () {
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>Page not found</h1>
      <p className='not-found__code'>404</p>
      <Link className='not-found__link' href='/countries'>
        Go to countries
      </Link>
    </div>
  )
}

export default Page404
