var express = require('express')
var bodyParser = require('body-parser')
const app = express();
const mongoose = require("mongoose");
const TouristDestination = require("./models/addLocations.models");
const Contact = require("./models/contacts.models");
require('dotenv').config();

var jsonParser = bodyParser.json
var urlencodedParser = bodyParser.urlencoded({ extended: false })




const cors = require('cors'); 
app.use(cors()); 
const dbURI =
  "mongodb+srv://capstone:12345@Cluster0.gdfnt.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(5000))
  .catch((err) => console.log(err));


const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const contactsRouter = require('./routes/contacts');
const locationsRouter = require('./routes/addlocations');

app.use('/contacts', contactsRouter);
app.use('/all-locations', locationsRouter);

//this chunk of code gets from the database



if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // relative path
  })
}



