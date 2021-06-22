//css
import './middlebar.scss';

// components
import Filter from '../subComponents/filter/Filter';
import SearchBar from '../subComponents/searchbar/SearchBar';

export default function Middlebar() {
  return (
    <div className="middle-bar">
      <div className="container">
        <SearchBar />
        <Filter />
      </div>
    </div>
  );
}
