const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const uri = 'mongodb://localhost:27017/movie_api';
mongoose.connect(uri, options)
    .then(_ => console.log("Veritabanı bağlantısı yapıldı"))
    .catch((err) => {
        throw err;
    });

mongoose.Promise = global.Promise;
