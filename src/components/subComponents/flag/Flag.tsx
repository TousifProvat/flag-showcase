import './flag.scss';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface propType {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}

export default function Flag({
  name,
  population,
  region,
  capital,
  flag,
}: propType) {
  // state
  const [loading, setLoading] = useState(true);

  const changeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    changeLoading();
    // eslint-disable-next-line
  }, []);

  return (
    <Link className="flag" to={`/${name.replaceAll(' ', '-')}`}>
      <div className="flag-img">
        {loading && <div className="loading"></div>}
        {!loading && <img src={flag} alt={name} />}
      </div>
      <div className="country-details">
        <h2 className="country-name">{name}</h2>
        <p>
          <b>Population:</b> {population}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </Link>
  );
}
