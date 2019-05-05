var mongoose = require('mongoose');

var experienceSchema = new mongoose.Schema({
    userId: String,
    seo: {
        description: String,
        score: Number // between 1 and 4
    },
    frontEnd: {
        description: String,
        score: Number // between 1 and 4
    },
    backEnd: {
        description: String,
        score: Number // between 1 and 4
    },
    dataBase: {
        description: String,
        score: Number // between 1 and 4
    },
    devOps: {
        description: String,
        score: Number // between 1 and 4
    },
    uiUx: {
        description: String,
        score: Number // between 1 and 4
    },
    ProductManagement: {
        description: String,
        score: Number // between 1 and 4
    },
    Test: {
        description: String,
        score: Number // between 1 and 4
    },
}, {
    timestamp: true,
});

var experienceModel = mongoose.model('experience', experienceSchema);

module.exports = experienceModel;
