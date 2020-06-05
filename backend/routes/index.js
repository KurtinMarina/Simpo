const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const { preventCache } = require('../middlewares/http-headers.middleware');


router.get('/all-profiles', preventCache, profileController.getAllProfiles);

router.get('/profile/:id', preventCache, profileController.getChooseProfile);

router.post('/profile/create', profileController.createNewProfile);

router.put('/profile/update', profileController.updateProfile);

module.exports = Object.freeze(router);
