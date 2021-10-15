const MovieModel = require("../models/MovieModel");

const get = async function (request, response, next) {
    try {
        const movies = await MovieModel.find({});
        if (movies) {
            await response.status(200).json(movies);
        } else {
            next({
                message: 'Herhangi bir film kaydı bulunamadı',
                status: 404,
                error: true
            });
        }
    } catch (e) {
        throw e;
    }
};

const getById = async function (request, response, next) {
    try {
        const movie = await MovieModel.findById(request.params.movie_id);
        if (movie) {
            await response.status(200).json(movie);
        } else {
            next({
                message: 'Herhangi bir film kaydı bulunamadı',
                status: 404,
                error: true
            });
        }
    } catch (e) {
        throw e;
    }
};

const add = async function (request, response, next) {
    const movie = new MovieModel(request.body);
    try {
        await movie.save();
        response.status(201).json(movie);
    } catch (e) {
        throw e;
    }
};

const update = async function (request, response, next) {
    try {
        const id = request.params.movie_id;
        const movie = await MovieModel.findByIdAndUpdate(id, request.body, {new: true});
        if (movie) {
            response.status(200).json(movie);
        } else {
            next({
                message: 'Güncelleme işlemi yapılamadı! Lütfen tekrar deneyiniz.',
                status: 404,
                error: true
            });
        }
    } catch (e) {
        throw e;
    }
};

const remove = async function (request, response, next) {
    try {
        const id = request.params.movie_id;
        const movie = await MovieModel.findByIdAndRemove(id);
        if (!movie) {
            response.status(200).json({
                message: 'Silme işlemi başarılı',
                status: 200,
                data: movie
            });
        } else {
            next({
                message: 'Silme işlemi yapılamadı! Lütfen tekrar deneyiniz.',
                status: 404,
                error: true
            });
        }
    } catch (e) {
        throw e;
    }
};

const topByNumber = async function (request, response, next) {
    try {
        const num = Number(request.params.number);
        const movies = await MovieModel.find({}).limit(num).sort({imdb_score: -1});
        if (movies) {
            response.status(200).json(movies);
        } else {
            next({
                message: 'Hiçbir film kaydı bulunamadı',
                status: 404,
                error: true
            });
        }
    } catch (e) {
        throw err;
    }

};

const between = async function (request, response, next) {
    try {
        const start_year = Number(request.params.start_year);
        const end_year = Number(request.params.end_year);
        const movies = await MovieModel.find(
        {
                year: {
                    "$gte": start_year,
                    "$lte": end_year
                }
            }
        );
        if(movies) {
            response.status(200).json(movies);
        } else {
            next({
                message: 'Hiçbir film kaydı bulunamadı',
                status: 404,
                error: true
            });
        }
    } catch (e) {
        throw e;
    }
}


module.exports = {
    get,
    getById,
    add,
    update,
    remove,
    topByNumber,
    between
};
