const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    createdAt: {
        type:Date,
        default: Date.now
    }
});

const DirectorModel = mongoose.model('Director', DirectorSchema);
module.exports = DirectorModel;
