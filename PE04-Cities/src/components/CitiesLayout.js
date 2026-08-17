import React from "react";
import { Outlet } from "react-router-dom";
import CityList from "./CityList";
import "./CitiesLayout.css";

// This layout is shared between the "Cities List" index route and the
// nested ":cityId" details route. The list on the left stays constant
// while the section on the right (the <Outlet />) swaps between the
// placeholder and the selected city's details.
function CitiesLayout({ cities }) {
  return (
    <div className="cities-layout">
      <section className="cities-layout-list">
        <h1>Cities List</h1>
        <p className="cities-layout-subtitle">
          {cities.length} {cities.length === 1 ? "city" : "cities"} — click a
          name to view details
        </p>
        <CityList cities={cities} />
      </section>
      <section className="cities-layout-details">
        <Outlet />
      </section>
    </div>
  );
}

export default CitiesLayout;
