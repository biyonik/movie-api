const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz'],
        maxlength: [64, '{PATH} alanı maksimum {MAXLENGTH} karakter uzunluğunda olabilir!'],
        minlength: [2, '{PATH} alanı minimum {MINLENGTH} karakter uzunluğunda olmalıdır!'],
    },
    category: {
        type: String,
        maxlength: [32, '{PATH} alanı maksimum {MAXLENGTH} karakter uzunluğunda olabilir!'],
        minlength: [2, '{PATH} alanı minimum {MINLENGTH} karakter uzunluğunda olmalıdır!']
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
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MovieModel = mongoose.model('Movie', MovieSchema);
module.exports = MovieModel;
