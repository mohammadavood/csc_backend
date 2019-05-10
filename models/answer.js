var mongoose = require('mongoose');

var answerSchema = new mongoose.Schema({
    userId: String,
    skills: {
        description: String,
        score: [String] // between 1 and 4
    },
    favorites: {
        description: String,
        score: [String] // between 1 and 4
    },
    seo: {
        description: String,
        score: [String] // between 1 and 4
    },
    frontEnd: {
        description: String,
        score: [String] // between 1 and 4
    },
    backEnd: {
        description: String,
        score: [String] // between 1 and 4
    },
    dataBase: {
        description: String,
        score: [String] // between 1 and 4
    },
    devOps: {
        description: String,
        score: [String] // between 1 and 4
    },
    uiUx: {
        description: String,
        score: [String] // between 1 and 4
    },
    ProductManagement: {
        description: String,
        score: [String] // between 1 and 4
    },
    Test: {
        description: String,
        score: [String] // between 1 and 4
    },
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

var answerModel = mongoose.model('answer', answerSchema);

module.exports = answerModel;
