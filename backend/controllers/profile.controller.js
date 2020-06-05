const { errorResponse } = require('../services/http.service');
const profileService = require('../services/profile.service');

function getAllProfiles (req, res){
    return profileService.getProfiles().then(results => {
        res.status(200).send(results);
    }).catch(e => {
        return errorResponse(res, e);
    });
}

function getChooseProfile (req, res){
    const { id } = req.params;

    return profileService.getProfileById(id).then(results => {
        res.status(200).send(results);
    }).catch(e => {
        return errorResponse(res, e);
    });
}

function createNewProfile (req, res){
    const { name, bio, fbId } = req.body;

    return profileService.create(name, bio, fbId).then(() => {
        res.status(201).send({ message: 'Profile created'});
    }).catch(e => {
        return errorResponse(res, e);
    });
}

function updateProfile (req, res){
    const { id, name, bio, fbId } = req.body;

    return profileService.update(id, name, bio, fbId).then(() => {
        res.status(200).send({ message: 'Profile update'});
    }).catch(e => {
        return errorResponse(res, e);
    });
}

module.exports = Object.freeze({
    getAllProfiles, getChooseProfile, createNewProfile, updateProfile
});