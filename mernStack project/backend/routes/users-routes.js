const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controller');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();



router.get('/', usersControllers.getUsers);

router.post(
    '/signup',
    fileUpload.single('image'),
    [
        check('name')
            .notEmpty(),
        check('email')
            .normalizeEmail()
            .isEmail(),
        check('password')
            .isLength({ min: 5 })
    ],
    usersControllers.signUp
);

router.post(
    '/login',
    usersControllers.login
);

module.exports = router;