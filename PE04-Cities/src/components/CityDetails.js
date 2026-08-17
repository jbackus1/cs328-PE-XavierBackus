import React from "react";
import { useParams, Link } from "react-router-dom";
import "./CityDetails.css";

function CityDetails({ cities }) {
  const { cityId } = useParams();
  const city = cities.find((c) => c.id === cityId);

  if (!city) {
    return (
      <div className="city-details city-details-missing">
        <h2>City not found</h2>
        <p>We couldn't find a city with the id "{cityId}".</p>
        <Link to="/" className="city-details-back">
          ← Back to Cities List
        </Link>
      </div>
    );
  }

  return (
    <article className="city-details">
      <header className="city-details-header">
        <h2>{city.name}</h2>
        <span className="city-details-country">{city.country}</span>
      </header>

      <dl className="city-details-grid">
        <div className="city-details-fact">
          <dt>Continent</dt>
          <dd>{city.continent || "—"}</dd>
        </div>
        <div className="city-details-fact">
          <dt>Population</dt>
          <dd>{Number(city.population).toLocaleString()}</dd>
        </div>
        <div className="city-details-fact">
          <dt>Founded</dt>
          <dd>{city.founded || "—"}</dd>
        </div>
        <div className="city-details-fact">
          <dt>Timezone</dt>
          <dd>{city.timezone || "—"}</dd>
        </div>
      </dl>

      {city.description && (
        <p className="city-details-description">{city.description}</p>
      )}
    </article>
  );
}

export default CityDetails;
