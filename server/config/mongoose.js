mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exam3');
mongoose.Promise = global.Promise;