var mongoose = require('mongoose');

var answerSchema = new mongoose.Schema({
    userId: String,
    inDesign: {
        description: String,
        score: Number // between 1 and 4
    },
    photography: {
        description: String,
        score: Number // between 1 and 4
    },
    graphicDesign: {
        description: String,
        score: Number // between 1 and 4
    },
    composition: {
        description: String,
        score: Number // between 1 and 4
    },
    documentation: {
        description: String,
        score: Number // between 1 and 4
    },
    music: {
        description: String,
        score: Number // between 1 and 4
    },
    ejra: {
        description: String,
        score: Number // between 1 and 4
    },
    translation: {
        description: String,
        score: Number // between 1 and 4
    },
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
