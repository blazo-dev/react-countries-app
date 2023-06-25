import Link from '../../../components/router/link/Link'
import './Home.scss'
function Home () {
  return (
    <div className='home'>
      <h1 className='home__title'>Let's look for a country!!!</h1>
      <Link
        className='home__link'
        href='/countries'
      >
        See all countries
      </Link>
    </div>
  )
}

export default Home
