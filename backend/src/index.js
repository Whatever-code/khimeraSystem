const express = require('express');
const morgar = require('morgan');
const routes = require('./routes/index');
const path = require('path');

//Initialize
const app = express();
//require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgar('dev'));

//Static File
app.use(express.static(path.join(__dirname, 'public')));

//Routes
routes(app);

//Start Server
app.listen(app.get('port'), () => {
    console.log('Server On: ' + app.get('port'));
});