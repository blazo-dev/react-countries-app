import Link from '../../components/router/link/Link'

function Page404 () {
  return (
    <>
      <h1>Page not found</h1>
      <p>404</p>
      <Link href='/countries'>Go to countries</Link>
    </>
  )
}

export default Page404
