var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    sid: String,
    uploads: [String],
}, {
    timestamp: true,
});

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;
