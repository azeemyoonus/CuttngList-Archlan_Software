var Item = require("../models/item");


exports.addItem = (details) => {
    return new Promise(async (resolve, reject) => {
        // console.log(details);
        let item = new Item(details);
        await item.save().then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })

    })

}

exports.getAllItems = () => {
    return new Promise(async (resolve, reject) => {
        await Item.find({}).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}