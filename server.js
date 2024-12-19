const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const port = 3000;

// Dummy data for train tracking
let trainData = {
  name: "Train 12345",
  location: { lat: 28.6139, lng: 77.209 },
  arrivalTime: "5 mins",
};

// Endpoint to get train data
app.get("/train", (req, res) => {
  // Simulate train movement
  trainData.location.lat += 0.001;
  trainData.location.lng += 0.001;

  res.json(trainData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
