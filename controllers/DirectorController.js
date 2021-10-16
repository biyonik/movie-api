const DirectorModel = require("../models/DirectorModel");
const mongoose = require("mongoose");

const get = async function (request, response, next) {
    try {
        const directories = await DirectorModel.aggregate([
            {
                $lookup: {
                    from: 'movies',
                    localField: '_id',
                    foreignField: 'director_id',
                    as: 'movies'
                }
            },
            {
                $unwind: {
                    path: '$movies',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $group: {
                    _id: {
                        _id: '$_id',
                        firstname: '$firstname',
                        lastname: '$lastname',
                        bio: '$bio',
                    },
                    movies: {
                        $push: '$movies'
                    }
                }
            },
            {
                $project: {
                    _id: '$_id._id',
                    firstname: '$_id.firstname',
                    lastname: '$_id.lastname',
                    movies: '$movies',
                }
            }
        ]);
        if (directories) {
            await response.status(200).json(directories);
        } else {
            next({
                message: 'Herhangi bir yönetmen kaydı bulunamadı',
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
        const director_id = mongoose.Types.ObjectId(request.params.director_id);
        const director = await DirectorModel.aggregate([
            {
                $match: {
                    '_id': director_id
                }
            },
            {
                $lookup: {
                    from: 'movies',
                    localField: '_id',
                    foreignField: 'director_id',
                    as: 'movies'
                }
            },
            {
                $unwind: {
                    path: '$movies',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $group: {
                    _id: {
                        _id: '$_id',
                        firstname: '$firstname',
                        lastname: '$lastname',
                        bio: '$bio',
                    },
                    movies: {
                        $push: '$movies'
                    }
                }
            },
            {
                $project: {
                    _id: '$_id._id',
                    firstname: '$_id.firstname',
                    lastname: '$_id.lastname',
                    bio: '$_id.bio',
                    movies: '$movies',
                }
            }
        ]);
        if (director) {
            await response.status(200).json(director);
        } else {
            next({
                message: 'Herhangi bir yönetmen kaydı bulunamadı',
                status: 404,
                error: true
            });
        }
    } catch (e) {
        throw e;
    }
};

const add = async function (request, response, next) {
    const director = new DirectorModel(request.body);
    try {
        await director.save();
        response.status(201).json(director);
    } catch (e) {
        throw e;
    }
};

const update = async function (request, response, next) {
    try {
        const director_id = request.params.director_id;
        const director = await DirectorModel.findByIdAndUpdate(director_id, request.body, {new: true});
        if (director) {
            response.status(200).json(director);
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
        const director_id = request.params.director_id;
        const director = await DirectorModel.findByIdAndRemove(director_id);
        if (director) {
            response.status(200).json({
                message: 'Silme işlemi başarılı',
                status: 200,
                data: director
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

module.exports = {
    get,
    getById,
    add,
    update,
    remove
};
