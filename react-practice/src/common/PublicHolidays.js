import { useEffect, useState } from "react";

const OPEN_HOLIDAY_API = 'https://openholidaysapi.org/';

function PublicHolidays() {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    // just going to plop this into the effect
    setIsLoading(true);
    fetch(OPEN_HOLIDAY_API + 'Countries')
      .then(response => response.json())
      .then(json => {
        console.log('foo', json);
        setCountries(json);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const updateHolidays = (l) => {
    fetch(OPEN_HOLIDAY_API + 'PublicHolidays?languageIsoCode=EN&validFrom=2023-01-01&validTo=2023-12-31&countryIsoCode=' + l)
      .then(response => response.json())
      .then(json => {
        setHolidays(json);
      });
  };

  return (
    <div className="PublicHolidays">
      <header>
        <h3>Public Holidays</h3>
        <div className="subheading">Find Holidays in your country!</div>
      </header>
      <nav>
        <label htmlFor="countries-selector">Select a country:</label>
        {!isLoading &&
          <select name="countries" id="countries-selector" onChange={(e) => updateHolidays(e.target.value)}>
            {countries.map((c) => {
              let name = c.name.find((ele) => {
                return ele.language === "EN";
              })
              return (<option key={c.isoCode} value={c.isoCode}>{name.text}</option>)
            })}
          </select>
        }
      </nav>
      {holidays &&
        <ul>
          {holidays.map((h) => {
            let name = h.name.find((ele) => {
              return ele.language === "EN";
            });

            return (<li key={h.id}>{name.text}</li>);
          })}
        </ul>
      }
    </div>
  );
}

export default PublicHolidays;
