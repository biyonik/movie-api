const UserModel = require("../models/UserModel");
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");

const register = async function (req, res, next) {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new UserModel({
            username: username,
            password: hashedPassword,
        });
        await user.save();
        res.status(200).json(user);
    } catch (e) {
        throw e;
    }
};

const login = async function (request, response, next) {
    try {
        const {username, password} = request.body;
        const user = await UserModel.findOne({username: username});
        if (user) {
            const passwordConfirmationStatus = await bcrypt.compare(password, user.password);
            if (passwordConfirmationStatus) {
                const token = jsonwebtoken.sign({username}, request.app.get('API_SECRET_KEY'), {expiresIn: 720});
                response.status(200).json({
                    status: true,
                    code: 200,
                    token: token
                });
            } else {
                next({
                    message: 'Kullanıcı adı veya parola hatalı!',
                    status: 404,
                    error: true
                });
            }
        } else {
            next({
                message: 'Böyle bir kullanıcı kaydı bulunamadı!',
                status: 404,
                error: true
            });
        }
    } catch (e) {
        throw e;
    }
}

module.exports = {
    register,
    login
}
