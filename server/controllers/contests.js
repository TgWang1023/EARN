require('../models/contest.js');

module.exports = {
    index: function(req, res) {
        res.render('pages/index');
    },
    about: function(req, res) {
        res.render('pages/about');
    }
}