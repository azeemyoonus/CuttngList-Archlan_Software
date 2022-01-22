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

exports.getAnItem = (id) => {
    return new Promise(async (resolve, reject) => {
        await Item.findById(id).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

exports.updateItem = (id, data) => {
    return new Promise(async (resolve, reject) => {
        await Item.findByIdAndUpdate(id, data).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

exports.deleteItem = (id) => {
    return new Promise(async (resolve, reject) => {
        await Item.findByIdAndRemove(id).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

exports.getTotalAmount = () => {
    return new Promise(async (resolve, reject) => {
        total = await Item.aggregate([{

            $group:
            {
                _id: null,
                total: { $sum: "$Amount" }
            }

        }]).exec((err, data) => {
            if (err) reject(err);
            else resolve(data[0].total);
        });
    })
}

exports.getTottalSQFT=()=>{
    return new Promise(async(resolve, reject)=>{
        total = await Item.aggregate([{

            $group:
            {
                _id: null,
                total: { $sum: "$TotalSQFT" }
            }

        }]).exec((err, data) => {
            if (err) reject(err);
            else resolve(data[0].total);
        });
    })
}