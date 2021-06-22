import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { v4 as uuid } from 'uuid';

// css
import './flagshowcase.scss';

//components
import Flag from '../subComponents/flag/Flag';
import Spinner from '../subComponents/spinner/Spinner';

export default function FlagShowcase({ countries }: { countries: [] }) {
  interface stateType {
    countries: {
      data: [];
    };
    loading: boolean;
  }

  const Loading = useSelector(
    ({ Reducer }: { Reducer: stateType }) => Reducer.loading
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(Loading);
  }, [Loading]);

  return (
    <div id="flag-showcase">
      <div className="container flag-showcase-container">
        {!loading &&
          countries.map(({ name, population, region, capital, flag }) => (
            <Flag
              key={uuid()}
              name={name}
              population={population}
              region={region}
              capital={capital}
              flag={flag}
            />
          ))}
        {loading && <Spinner />}
      </div>
    </div>
  );
}
