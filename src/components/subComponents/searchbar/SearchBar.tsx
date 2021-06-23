import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// css
import './searchBar.scss';

// icon
import { ReactComponent as SearchIcon } from '../../../assets/icons/Search.svg';

// action
import { searchCountries } from '../../../action/Actions';

export default function SearchBar() {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  useEffect(() => {
    if (input.trim() !== '') {
      dispatch(searchCountries(input));
    }
    // eslint-disable-next-line
  }, [input]);

  return (
    <div className="search-bar">
      <div className="icon">
        <SearchIcon />
      </div>
      <input
        name="searchbar for countries"
        type="text"
        className="search-input"
        placeholder="Search for a country..."
        onChange={(e) => setInput(e.target.value.trim())}
        value={input}
      />
    </div>
  );
}
