var express = require('express');
var router = express.Router();
var itemControllers = require('../controllers/itemControllers')

/* GET users listing. */
router.get('/:no',itemControllers.viewJobCard );


router.post('/addItem/:no', itemControllers.addItem);

router.get('/editItem/:id', itemControllers.editItem);
router.delete('/:no/deleteItem/:id', itemControllers.deleteItem);


module.exports = router;
