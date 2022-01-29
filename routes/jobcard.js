var express = require('express');
var router = express.Router();
var itemControllers = require('../controllers/itemControllers')

/* GET users listing. */
router.get('/:no',itemControllers.viewJobCard );


router.post('/addItem/:no', itemControllers.addItem);

module.exports = router;
