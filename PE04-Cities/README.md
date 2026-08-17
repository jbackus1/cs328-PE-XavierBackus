# Input

The user interacts with the app in two ways. On the Cities List route ("/"), clicking a city's name (a `NavLink` rendered by CityList) navigates to that city's id (e.g. "/kyoto"). On the Add City route ("/add"), the user types into a form (AddCity.js) covering name, country, population, continent, founded year, timezone, and a description, then submits it.

# Process

App.js holds the single source of truth for city data in state (`cities`, seeded from data/cities.js) along with an `addCity` function that generates a unique id and appends the new city to state. React Router's `<Routes>` nests a `:cityId` route inside the "/" route, both rendered through CitiesLayout — a shared page shell whose left column always shows CityList and whose right column renders an `<Outlet />`. On the index route the Outlet shows a placeholder; once a `:cityId` route matches, CityDetails uses `useParams` to read the id from the URL, looks up the matching city object in the `cities` array passed down as a prop, and renders its details in that same right-hand section — the surrounding layout (navbar, list, page shell) never re-mounts. Submitting AddCity validates the required fields, calls `onAddCity` (App's `addCity`) to update state, and then calls `useNavigate()("/")` to redirect the user back to the Cities List.

# Output

The Cities List page shows a two-column layout: a persistent list of clickable city names/countries on the left, and either a "select a city" placeholder or the selected city's full details (continent, population, founding year, timezone, description) on the right. Adding a city redirects to this same list, where the newly added city now appears and is clickable like any other.
