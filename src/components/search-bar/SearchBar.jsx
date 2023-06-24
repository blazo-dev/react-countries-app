import { useSearch } from '../../hooks'
import './SearchBar.scss'
function SearchBar () {
  const { setSearch } = useSearch()

  const handledChange = (e) => {
    const searchValue = e.target.value
    setSearch(searchValue)
  }

  return (
    <label className='search'>
      <i className='fa-solid fa-magnifying-glass' />
      <input
        type='text'
        placeholder='Search for a country...'
        className='search__input'
        onChange={handledChange}
      />
    </label>
  )
}

export default SearchBar
