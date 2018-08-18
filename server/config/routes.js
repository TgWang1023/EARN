const contests = require('../controllers/contests');
const users = require('../controllers/users');

module.exports = function(app) {
    // index page 
    app.get('/', function(req, res) {
        contests.index(req, res);
    });

    // about page 
    app.get('/about', function(req, res) {
        contests.about(req, res);
    });
}