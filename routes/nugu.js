const express = require('express');
const Request = require('../nugu');
const { json } = require('../http');
const router = express.Router();

router.post('/', json(Request));

module.exports = router;
