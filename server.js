var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

// Create and connect to database
mongoose.connect('mongodb://localhost/tasks', {useNewUrlParser: true});

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(3000, function() {
    console.log("running on port 3000");
})
