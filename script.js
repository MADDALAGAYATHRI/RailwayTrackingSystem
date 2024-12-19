let map, marker;

// Initialize Google Map
function initMap() {
  const initialPosition = { lat: 28.7041, lng: 77.1025 }; // Default location (New Delhi)
  map = new google.maps.Map(document.getElementById("map"), {
    center: initialPosition,
    zoom: 10,
  });

  marker = new google.maps.Marker({
    position: initialPosition,
    map: map,
    title: "Train Location",
  });

  fetchTrainData();
  setInterval(fetchTrainData, 10000); // Update train location every 10 seconds
}

// Fetch train data from server
function fetchTrainData() {
  fetch("http://localhost:3000/train")
    .then((response) => response.json())
    .then((data) => {
      updateTrainLocation(data);
    })
    .catch((error) => console.error("Error fetching train data:", error));
}

// Update train marker and information
function updateTrainLocation(data) {
  const { name, location, arrivalTime } = data;

  document.getElementById("train-name").textContent = name;
  document.getElementById("train-location").textContent = `${location.lat}, ${location.lng}`;
  document.getElementById("arrival-time").textContent = arrivalTime;

  const position = { lat: location.lat, lng: location.lng };
  marker.setPosition(position);
  map.setCenter(position);
}

// Load map on window load
window.onload = initMap;
