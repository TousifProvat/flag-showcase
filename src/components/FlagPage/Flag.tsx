import './flag.scss';

import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

// axios
import axios from 'axios';
// react-router
import { useParams } from 'react-router-dom';

// svg
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';

export default function Flag() {
  let { name }: { name: string } = useParams();

  interface stateType {
    name: string;
    flag: string;
    nativeName: String;
    population: number;
    region: string;
    subregion: string;
    capital: string;
    topLevelDomain: [string];
    currencies: [{ name: string }];
    languages: [{ name: string }];
    borders: [string];
  }

  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState<stateType>();

  const changeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const getCountry = async (country: string) => {
    const { data } = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    );
    setCountry(data[0]);
  };

  useEffect(() => {
    getCountry(name);
    changeLoading();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="flag-page">
      <div className="container">
        <a href="/" className="go-back">
          <ArrowLeft />
          Back
        </a>
        <div className="flag-page-container">
          <div className="left-side">
            <div className="flag-img">
              {loading && <div className="loading"></div>}
              {country && country.flag && !loading && (
                <img src={country.flag} alt={country.name + '-flag'} />
              )}
            </div>
          </div>
          {country && (
            <div className="right-side">
              <h2 className="country-name">{country.name}</h2>
              <div className="details">
                <div className="details-left">
                  <p>
                    <strong>Native Name: </strong>
                    {country.nativeName}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {country.population}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {country.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {country.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {country.capital}
                  </p>
                </div>
                <div className="details-right">
                  <p>
                    <strong>Top Level Domain: </strong>
                    {country.topLevelDomain[0]}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {country.currencies[0].name}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {country.languages.length > 1
                      ? country.languages.map(
                          (language) => language.name + ', '
                        )
                      : country.languages.map((language) => language.name)}
                  </p>
                </div>
              </div>
              {country.borders.length > 1 && (
                <div className="border-countries">
                  <strong>Border Countries: </strong>
                  <div className="borders">
                    {country.borders.map((border) => (
                      <span className="border" key={uuid()}>
                        {border}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
