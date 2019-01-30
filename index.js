//https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
const express		= require('express');
const bodyParser	= require('body-parser');
const weed			= require('./routes/weed.route'); // Imports routes for the products
const app			= express();
const mongoose		= require('mongoose');

let port = 1234;
let dev_db_url = 'mongodb://:@ds111765.mlab.com:11765/weedapp';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use('/weeds', weed);

// Set up mongoose connection
mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Pour que l'appli écoute sur le port donné
app.listen(port, () => {
    console.log('Server is up and running on port number ', port);
});

