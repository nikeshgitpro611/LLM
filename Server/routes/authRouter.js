const express = require('express');
const authControl = require("../controller/AuthControler");

const router = express.Router();

router.post('/signup', authControl.signup);
router.post('/login', authControl.login);

module.exports = router;
