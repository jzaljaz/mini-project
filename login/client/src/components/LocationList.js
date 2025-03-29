import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:5000";

function LocationList() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/get_location_names`)
      .then((response) => response.json())
      .then((data) => setLocations(data.locations))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  return (
    <div>
      <h2>Available Locations</h2>
      <ul>
        {locations.map((location, index) => (
          <li key={index}>{location}</li>
        ))}
      </ul>
    </div>
  );
}

export default LocationList;
