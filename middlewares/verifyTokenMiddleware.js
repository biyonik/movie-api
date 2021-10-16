const jsonwebtoken = require('jsonwebtoken');

module.exports = function (request, response, next) {
    const token = request.headers['x-axxess-token']
        || request.body.token
        || request.query.token
        || request.header('Authorization').replace('Bearer', '').trim();
    console.log(token);
    if (token) {
        const status = jsonwebtoken.verify(token, request.app.get('API_SECRET_KEY'), (err, decoded) => {
            if (err) {
                response.status(404).json({
                    status: false,
                    code: 404,
                    message: 'Bu token bilgisi geçersiz!'
                });
            } else {
                request.decoded = decoded;
                next();
            }
        })
    } else {
        response.status(404).json({
            status: false,
            code: 404,
            message: 'Hiçbir token sağlanmadı!'
        })
    }
};
