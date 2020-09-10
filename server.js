// const requirejs = require('requirejs');
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const mongoose = require('mongoose')
 require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('client/build'));

const uri = process.env.ATLAS_URI;
mongoose
    .connect("mongodb+srv://capstone:12345@cluster0.gdfnt.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true })
    
// const connection = mongoose.connection;
console.log('in the name of all that is holy, I beg of thee')
mongoose.connection.on('open', () => {  console.log("MongoDB database connection established successfully");})
mongoose.connection.on('error', (err) => {  console.log(err);})

const addLocationsRouter = require('./models/addLocations.models');
const contactsRouter = require('./models/contacts.models');

app.use('/addLocations', addLocationsRouter);
app.use('/contacts', contactsRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});