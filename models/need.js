var mongoose = require('mongoose');

var needSchema = new mongoose.Schema({
    userId: String,
    Q1: {
        type: String,
    },
    Q2: {
        type: String,
    },
    Q3: {
        type: String,
    }
}, {
    timestamp: true,
});

var needModel = mongoose.model('need', needSchema);

module.exports = needModel;
