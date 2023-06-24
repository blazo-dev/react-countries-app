import { useColorScheme } from '../../hooks'
import './ColorSchemeButton.scss'

function ColorSchemeButton () {
  const { colorScheme, setColorScheme } = useColorScheme()

  const handleClick = () => {
    setColorScheme(!colorScheme)
  }

  return (
    <button className='scheme__button' onClick={handleClick}>
      <i className={`${colorScheme ? 'fa-solid' : 'fa-regular'} fa-moon`} />
      Dark mode
    </button>
  )
}

export default ColorSchemeButton
