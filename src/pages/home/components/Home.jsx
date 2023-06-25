import Link from '../../../components/router/link/Link'

function Home () {
  return (
    <div className='home'>
      <h1 className='home__title'>
        Let's look for a country! Click below to see all countries.
      </h1>
      <Link className='app__button home__button' href='/countries'>
        See all countries
      </Link>
    </div>
  )
}

export default Home
