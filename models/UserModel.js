const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, '{PATH alanı boş bırakılamaz}'],
        maxlength: [32, '{PATH} alanı maksimum {MAXLENGTH} karakter uzunluğunda olabilir!'],
        minlength: [4, '{PATH} alanı minimum {MINLENGTH} karakter uzunluğunda olmalıdır!'],
        unique: [true, '{PATH} alanı benzersiz olmalıdır. Bu kullanıcı adı kullanılmakta!']
    },
    password: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz!']
    },
    hashedPassword: {
        type: String
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
