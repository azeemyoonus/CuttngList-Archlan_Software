var express = require('express');
var router = express.Router();
var itemControllers = require('../controllers/itemControllers')

/* GET home page. */
router.get('/', itemControllers.getAllItems);
router.post('/addItem', itemControllers.addItem);
router.get('/downloadExcel',itemControllers.downloadExcel);

module.exports = router;
