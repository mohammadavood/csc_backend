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
    experiences: {
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
