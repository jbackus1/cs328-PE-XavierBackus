import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCity.css";

const emptyForm = {
  name: "",
  country: "",
  continent: "",
  population: "",
  founded: "",
  timezone: "",
  description: "",
};

function AddCity({ onAddCity }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.country.trim() || !form.population) {
      setError("Please fill in at least the city name, country, and population.");
      return;
    }

    onAddCity({
      name: form.name.trim(),
      country: form.country.trim(),
      continent: form.continent.trim(),
      population: Number(form.population),
      founded: form.founded.trim(),
      timezone: form.timezone.trim(),
      description: form.description.trim(),
    });

    // Redirect back to the Cities List after a successful submission.
    navigate("/");
  };

  return (
    <div className="add-city">
      <h1>Add a New City</h1>
      <p className="add-city-subtitle">
        Fill out the details below to add a city to the list.
      </p>

      <form className="add-city-form" onSubmit={handleSubmit}>
        {error && <p className="add-city-error">{error}</p>}

        <div className="add-city-field">
          <label htmlFor="name">City Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Lisbon"
            required
          />
        </div>

        <div className="add-city-field">
          <label htmlFor="country">Country *</label>
          <input
            id="country"
            name="country"
            type="text"
            value={form.country}
            onChange={handleChange}
            placeholder="e.g. Portugal"
            required
          />
        </div>

        <div className="add-city-row">
          <div className="add-city-field">
            <label htmlFor="population">Population *</label>
            <input
              id="population"
              name="population"
              type="number"
              min="0"
              value={form.population}
              onChange={handleChange}
              placeholder="e.g. 545000"
              required
            />
          </div>

          <div className="add-city-field">
            <label htmlFor="continent">Continent</label>
            <input
              id="continent"
              name="continent"
              type="text"
              value={form.continent}
              onChange={handleChange}
              placeholder="e.g. Europe"
            />
          </div>
        </div>

        <div className="add-city-row">
          <div className="add-city-field">
            <label htmlFor="founded">Founded (year)</label>
            <input
              id="founded"
              name="founded"
              type="text"
              value={form.founded}
              onChange={handleChange}
              placeholder="e.g. 1256"
            />
          </div>

          <div className="add-city-field">
            <label htmlFor="timezone">Timezone</label>
            <input
              id="timezone"
              name="timezone"
              type="text"
              value={form.timezone}
              onChange={handleChange}
              placeholder="e.g. WET (UTC+0)"
            />
          </div>
        </div>

        <div className="add-city-field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            placeholder="A few sentences about this city..."
          />
        </div>

        <div className="add-city-actions">
          <button type="submit" className="add-city-submit">
            Add City
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCity;
