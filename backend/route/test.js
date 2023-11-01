const express = require('express')
const test = require('../controller/test')
const router = express.Router()

router.route('/api/tests')
 .get(test.getTest)


module.exports = router;
