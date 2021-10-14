const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz']
    },
    category: {
        type: String
    },
    country: {
        type: String
    },
    year: {
        type: Number
    },
    imdb_score: {
        type: Number
    },
    director_id: Schema.Types.ObjectId,
    date: {
        type: Date,
        default: Date.now
    }
});

const MovieModel = mongoose.model('Movie', MovieSchema);
module.exports = MovieModel;
