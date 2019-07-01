const express = require('express');
const nugu = require('../nugu');
const router = express.Router();

router.post(`/nugu/answerCapital`, nugu);

module.exports = router;
