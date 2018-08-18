var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
// index page 
app.get('/', function(req, res) {
    res.render('pages/');
});

// about page 
app.get('/payment', function(req, res) {
    res.render('pages/payment');
});

app.listen(3000, function () {
  console.log('SimpleNodeServer is running on port 3000!');
});