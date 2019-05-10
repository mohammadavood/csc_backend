const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/anjoman', { useNewUrlParser: true }, (err) => {
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/anjoman`, {
     useNewUrlParser: true ,
     authSource: 'admin'
    }, (err) => {
    if (err) {
        console.error(err);
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
});

module.exports = {mongoose};
