const express = require('express');
const router = express.Router();
const ctrlHobbies = require('../controllers/hobbies'); 
const ctrlOthers = require('../controllers/others');

/* Hobbies pages */
router.get('/', ctrlHobbies.login);
router.get('/hobbies', ctrlHobbies.hobbyInfo);
router.get('/hobbies/register', ctrlHobbies.register);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;