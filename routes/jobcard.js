var express = require('express');
var router = express.Router();
var itemControllers = require('../controllers/itemControllers')

/* GET users listing. */
router.get('/:no',itemControllers.viewJobCard );



// function(req, res, next) {
//   console.log("hello here");
//   res.send('respond with a resource');
// });

router.post('/addItem/:no', itemControllers.addItem);

module.exports = router;
