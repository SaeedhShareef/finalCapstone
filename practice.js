const express = require("express");
const newLocation = express();
const TouristDestination = require("./models/addLocations.models");

app.use(cors()); 

const dbURI =
  "mongodb+srv://capstone:12345@cluster0.gdfnt.mongodb.net/Capstone?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));

newLocation.get("/add-location", (req, res) => {
    const location = new TouristDestination({
      name: "test addition",
    });
    location.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
  });