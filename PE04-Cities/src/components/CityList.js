import React from "react";
import { NavLink } from "react-router-dom";
import "./CityList.css";

function CityList({ cities }) {
  if (cities.length === 0) {
    return <p className="city-list-empty">No cities yet. Add one to get started!</p>;
  }

  return (
    <ul className="city-list">
      {cities.map((city) => (
        <li key={city.id}>
          <NavLink
            to={`/${city.id}`}
            className={({ isActive }) =>
              isActive ? "city-list-item active" : "city-list-item"
            }
          >
            <span className="city-list-name">{city.name}</span>
            <span className="city-list-country">{city.country}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default CityList;
