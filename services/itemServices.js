var Item = require("../models/item");
var objectid = require('mongodb').ObjectID;
var mongoose = require('mongoose');

exports.addItem = (details, jobNo) => {
    return new Promise(async (resolve, reject) => {
        // console.log(details);
        // let item = new Item(details);
        console.log("fromhere");
        console.log(details);
         await Item.updateOne(
            {JobCard: jobNo },
            { $push: { Items: details } }            
        ).then((res) => {
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

exports.addJobCard=(data)=>{
    return new Promise(async (resolve, reject)=>{
        let item = new Item(data);
        await item.save().then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

exports.getJobCardDetails=(cardNO)=>{
    return new Promise(async (resolve, reject)=>{
        Item.findOne({ JobCard: Number.parseInt(cardNO)}, function (err, doc){
            if(!err){
                // console.log(doc);
                resolve(doc);
            }
            else reject(err);
          });
    })
}