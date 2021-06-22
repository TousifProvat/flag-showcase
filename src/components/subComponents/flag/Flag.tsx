import './flag.scss';

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
  return (
    <a className="flag" href={`/${name}`}>
      <div className="flag-img">
        <img src={flag} alt={name} />
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
    </a>
  );
}
