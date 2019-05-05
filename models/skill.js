var mongoose = require('mongoose');

var skillSchema = new mongoose.Schema({
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
}, {
    timestamp: true,
});

var skillModel = mongoose.model('skill', skillSchema);

module.exports = skillModel;
