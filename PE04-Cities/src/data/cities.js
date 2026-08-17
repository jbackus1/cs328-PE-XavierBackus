// Seed data for the Cities app.
// Each city has a unique `id` used by the details route (/cities/:cityId).
const initialCities = [
  {
    id: "seattle",
    name: "Seattle",
    country: "United States",
    continent: "North America",
    population: 749256,
    founded: 1851,
    timezone: "PST (UTC-8)",
    description:
      "Known as the Emerald City, Seattle sits on Puget Sound and is famous for the Space Needle, its coffee culture, and being home to companies like Amazon and Microsoft.",
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    population: 1463723,
    founded: 794,
    timezone: "JST (UTC+9)",
    description:
      "The former imperial capital of Japan, Kyoto is renowned for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses.",
  },
  {
    id: "nairobi",
    name: "Nairobi",
    country: "Kenya",
    continent: "Africa",
    population: 4397073,
    founded: 1899,
    timezone: "EAT (UTC+3)",
    description:
      "The capital of Kenya, Nairobi is a major regional business hub known as the 'Green City in the Sun' and is home to Nairobi National Park.",
  },
  {
    id: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    continent: "South America",
    population: 3120612,
    founded: 1580,
    timezone: "ART (UTC-3)",
    description:
      "The capital of Argentina, celebrated for its European-style architecture, tango culture, and vibrant neighborhoods like La Boca and Palermo.",
  },
];

export default initialCities;
