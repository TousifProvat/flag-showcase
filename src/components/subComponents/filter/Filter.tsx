import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

// css
import './filter.scss';

// icon
import { ReactComponent as Chevron } from '../../../assets/icons/chevronDown.svg';

// action
import { getFilter } from '../../../action/Actions';

export default function Filter() {
  let [active, setActive] = useState(false);
  let [filter, setFilter] = useState('Filter by region');

  const regions = ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania', 'All'];

  const toggleActive = () => {
    setActive((active = !active));
  };

  const dispatch = useDispatch();

  const handleClick = (data: string) => {
    setFilter(data);
    dispatch(getFilter(data));
  };

  return (
    <div className={`region-dropdown ${active ? 'active-dropdown' : ''}`}>
      <button className="dropbtn" onClick={toggleActive}>
        {filter} <Chevron />
      </button>
      <div className="regions">
        {regions.map((region) => (
          <span onClick={() => handleClick(region)} key={uuid()}>
            {region}
          </span>
        ))}
      </div>
    </div>
  );
}
