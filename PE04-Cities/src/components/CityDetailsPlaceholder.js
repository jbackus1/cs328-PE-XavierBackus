import React from "react";
import "./CityDetails.css";

// Shown for the index route ("/") before the user has selected a city.
function CityDetailsPlaceholder() {
  return (
    <div className="city-details city-details-missing">
      <h2>👈 Select a city</h2>
      <p>Click on any city in the list to see its details here.</p>
    </div>
  );
}

export default CityDetailsPlaceholder;
