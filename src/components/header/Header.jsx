import './Header.scss'
import { ColorSchemeButton } from '..'

function Header () {
  return (
    <header className='header'>
      <div className='header__wrapper wrapper'>
        <h2 className='header__title'>Where in the world?</h2>
        <aside>
          <ColorSchemeButton />
        </aside>
      </div>
    </header>
  )
}

export default Header
