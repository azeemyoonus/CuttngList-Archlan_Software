var express = require('express');
var router = express.Router();
var itemControllers = require('../controllers/itemControllers')

/* GET home page. */
router.get('/', itemControllers.getAllItems);
// router.post('/addItem/:no', itemControllers.addItem);
// router.get('/downloadExcel',itemControllers.downloadExcel);
// router.get('/editItem/:id', itemControllers.editItem);
// router.post('/updateItem/:id', itemControllers.updateItem);

router.delete('/deleteJobCard/:id', itemControllers.deleteJobCard);

router.get("/searchJobCard", itemControllers.searchJobCard);

router.get("/addNewJobCard", itemControllers.newJobCard);
router.post("/addJobCard", itemControllers.addNewJobCard);
// router.post("/getjobcard", itemControllers.getJobCard);
// router.get('/viewjobcard/:no', itemControllers.viewJobCard);

module.exports = router;
