import { useId } from 'react'
import { useToggle } from '../../hooks'
import useFilter from '../../hooks/useFilter'
import './FilterSelector.scss'
function FilterSelector () {
  const { setFilters } = useFilter()
  const [checked, toggleCheck] = useToggle(false)
  const checkboxId = useId()

  const filtersToShow = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  const handledChecked = () => {
    toggleCheck()
  }

  const handledLeave = () => {
    toggleCheck()
  }

  const handledFilter = (filter) => {
    toggleCheck(false)
    setFilters({ region: filter })
  }

  return (
    <div className='filter'>
      <label className='filter__button' htmlFor={checkboxId}>
        <span className='filter__title'>Filter by Region</span>
        <i className='filter__angle fa-solid fa-angle-down' />
      </label>
      <input
        type='checkbox'
        id={checkboxId}
        className='filter__checkbox'
        hidden
        checked={checked}
        onChange={handledChecked}
      />
      <ul className='filter__list' onMouseLeave={handledLeave}>
        {filtersToShow.map((filter) => (
          <li
            key={filter}
            className='filter__item'
            onClick={() => handledFilter(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterSelector
