import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CitiesLayout from "./components/CitiesLayout";
import CityDetails from "./components/CityDetails";
import CityDetailsPlaceholder from "./components/CityDetailsPlaceholder";
import AddCity from "./components/AddCity";
import NotFound from "./components/NotFound";
import initialCities from "./data/cities";
import "./App.css";

function App() {
  const [cities, setCities] = useState(initialCities);

  const addCity = (newCity) => {
    const id = `${newCity.name.trim().toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`;
    setCities((prev) => [...prev, { id, ...newCity }]);
    return id;
  };

  return (
    <div className="app">
      <Navbar />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<CitiesLayout cities={cities} />}>
            <Route index element={<CityDetailsPlaceholder />} />
            <Route path=":cityId" element={<CityDetails cities={cities} />} />
          </Route>
          <Route path="/add" element={<AddCity onAddCity={addCity} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
