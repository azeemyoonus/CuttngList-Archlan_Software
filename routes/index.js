var express = require('express');
var router = express.Router();
var itemControllers = require('../controllers/itemControllers')

/* GET home page. */
router.get('/', itemControllers.getAllItems);
router.post('/addItem', itemControllers.addItem);
router.get('/downloadExcel',itemControllers.downloadExcel);
router.get('/editItem/:id', itemControllers.editItem);
router.post('/updateItem/:id', itemControllers.updateItem);
router.delete('/deleteItem/:id', itemControllers.deleteItem);


module.exports = router;
