const express = require('express');

const router = express.Router();

// destructure object
const { generateImage } = require('../controller/openaiController');

router.post('/generateimage', generateImage);

module.exports = router;  