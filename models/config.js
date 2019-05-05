var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/anjoman', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error(err);
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
});

module.exports = {mongoose};
