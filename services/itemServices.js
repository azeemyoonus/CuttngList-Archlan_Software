var Item = require("../models/item");
var objectid = require('mongodb').ObjectID;
var mongoose = require('mongoose');

exports.addItem = (details, jobNo) => {
    return new Promise(async (resolve, reject) => {    
        console.log("adding");
        console.log("fromhere");
        console.log(details);
        await Item.updateOne(
            { _id: jobNo },
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

exports.getAnItem = (jobCardNO, id) => {
    return new Promise(async (resolve, reject) => {
        console.log(id);
        data = await Item.find(
            { _id: parseInt(jobCardNO) },
            {
                Items: { $elemMatch: { _id: id } }
            },
            {
                $project: {
                    Items: 1,
                    JobCard: 1
                }
            }


        ).then((res) => {
            const data = res[0].Items[0];            
            data["JobCard"] = jobCardNO;
            console.log(data);
            resolve(res[0].Items[0])
        }).catch((err) => {
            reject(err)
        })
    })

}

exports.updateItem = (id, jobCardNo, data) => {
    return new Promise(async (resolve, reject) => {      
        await Item.updateOne({ _id: parseInt(jobCardNo), "Items._id": mongoose.Types.ObjectId(id) },
            {
                $set: {
                    "Items.$.ItemName": data.ItemName,
                    "Items.$.Thickness": data.Thickness,
                    "Items.$.Width": data.Width,
                    "Items.$.Height": data.Height,
                    "Items.$.QTY": data.QTY,
                    "Items.$.TotalSQFT": data.TotalSQFT,
                    "Items.$.Remarks": data.Remarks,
                    "Items.$.Finish": data.Finish,
                    "Items.$.RateSQFT": data.RateSQFT,
                    "Items.$.Amount": data.Amount
                }
            }).then((res) => {
                resolve(res)
                console.log(res);
            }).catch((err) => {
                reject(err)
            })


    })
}

exports.deleteItem = (jobCardNo, itemId) => {
    return new Promise(async (resolve, reject) => {
        console.log("deleting");
        await Item.findOneAndUpdate({ _id: parseInt(jobCardNo) }, { $pull: { Items: { _id: itemId } } }).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

exports.getTotalAmount = (id) => {
    return new Promise(async (resolve, reject) => {
        total = await Item.aggregate([
            {
                $match: { _id: parseInt(id) },
            },

            { $unwind: "$Items" },

            {
                $group:
                {
                    _id: null,
                    total: { $sum: "$Items.Amount" }
                }
            }

        ]).exec(async (err, data) => {
            if (err) reject(err);
            else if (data.length != 0) {
                await Item.findOneAndUpdate({ _id: parseInt(id) }, { TotalAmount: data[0].total.toFixed(3) }).then((res) => {
                    resolve(data[0].total)
                }).catch((err) => {
                    reject(err);
                })
            }
        else {
            await Item.findOneAndUpdate({ _id: parseInt(id) }, { TotalAmount: 0 }).then((res) => {
                resolve(0)
            }).catch((err) => {
                reject(err);
            })}

        });
    })
}

exports.getTotalSQFT = (id) => {
    return new Promise(async (resolve, reject) => {
        total = await Item.aggregate([
            {
                $match: { _id: parseInt(id) },
            },

            { $unwind: "$Items" },

            {
                $group:
                {
                    _id: null,
                    total: { $sum: "$Items.TotalSQFT" }
                }
            }

        ]).exec(async (err, data) => {
            if (err) reject(err);
            else if (data.length != 0) {
                await Item.findOneAndUpdate({ _id: parseInt(id) }, { TotalSQFT: data[0].total.toFixed(3) }).then((res) => {
                    resolve(data[0].total)
                }).catch((err) => {
                    reject(err);
                })
            }
        else {
            await Item.findOneAndUpdate({ _id: parseInt(id) }, { TotalSQFT: 0 }).then((res) => {
                resolve(0)
            }).catch((err) => {
                reject(err);
            })}

        });
    })
}

exports.addJobCard = (data) => {
    return new Promise(async (resolve, reject) => {
        let item = new Item(data);
        await item.save().then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
}

exports.getJobCardDetails = (cardNO) => {
    return new Promise(async (resolve, reject) => {
        Item.findOne({ _id: Number.parseInt(cardNO) }, function (err, doc) {
            if (doc==null) {              
                reject({message: "No JobCard Found"})
            }
            else if (!err){
                
                // console.log([doc]);
                resolve([doc]);
            }
            else {
                console.log(err);
                reject(err);
            }
        });
    })
}

exports.updateJobCard=(id, data)=>{
    return new Promise(async(resolve, reject)=>{
        await Item.findByIdAndUpdate(id, data).then((response)=>{
           resolve(response);
        }).catch((err)=>{
            reject(err);
        })            
         
    })
}

exports.findJobCard=(id)=>{
    return new Promise(async(resolve, reject)=>{       
        await Item.findOne({_id: id}).then((res)=>{           
            resolve(res);  
            console.log(res);
        }).catch((err)=>{        
            reject(err);
        })
    })
}

exports.deleteJobCard=(id)=>{
    return new Promise(async (resolve, reject)=>{
        await Item.deleteOne({_id:id}).then((res)=>{
            resolve(res)
        }).catch((err)=>{
            reject(err);
        })
    })
}