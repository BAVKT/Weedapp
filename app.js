
const express		= require('express');
const bodyParser	= require('body-parser');
const weed			= require('./routes/weed.route'); // Imports routes for the products
const app			= express();

let port = 1234;

app.use('/weeds', weed);

//Pour que l'appli écoute sur le port donné
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

