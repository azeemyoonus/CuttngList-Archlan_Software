var itemservices = require('../services/itemServices')

exports.getAllItems = async (req, res) => {
    await itemservices.getAllItems().then((response)=>{
        console.log(response);
        res.render("index", {response});
    })
        
}


exports.addItem = async (req, res) => {
    console.log("hello");
    await itemservices.addItem(req.body).then((response) => {
        console.log(response);
        res.redirect('/');
    })
}