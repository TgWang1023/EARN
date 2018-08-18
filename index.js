var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
<<<<<<< HEAD
// index page 
app.get('/', function(req, res) {
    res.render('pages/');
});

// about page 
app.get('/payment', function(req, res) {
    res.render('pages/payment');
});
=======

require('./server/config/mongoose.js');
require('./server/config/routes')(app);
>>>>>>> e2a467a446b22251ed4403617068d8c1d5d88d9d

app.listen(3000, function () {
  console.log('SimpleNodeServer is running on port 3000!');
});