var Item = require("../models/item");
var objectid = require('mongodb').ObjectID;
var mongoose = require('mongoose');

exports.addItem = (details, jobNo) => {
    return new Promise(async (resolve, reject) => {
        // console.log(details);
        // let item = new Item(details);
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
            //    const finaldata={...data, jobcard: jobCardNO}
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
        console.log(data);

        //     await this.deleteItem(jobCardNo, id).then(async(res) => {
        //         return await this.addItem(data, jobCardNo)
        //     }).then((res)=> {
        //         resolve(res);
        //     }).catch ((err) => {
        //         reject(err)
        //     })


        // resolve(true);

console.log(id, jobCardNo, data);

        await Item.updateOne({ _id: parseInt(jobCardNo), "Items._id": mongoose.Types.ObjectId(id) },
            {
                $set: {
                    "Items.$.ItemName": data.Item,
                    "Items.$.Thickness": data.Thickness,
                    "Items.$.width": data.width,
                    "Items.$.Height": data.Height,
                    "Items.$.QTY":data.QTY,
                    "Items.$.TotalSQFT": data.TotalSQFT,
                    "Items.$.Remarks": data.Remarks,
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
        await Item.findOneAndUpdate({ JobCard: jobCardNo }, { $pull: { Items: { _id: itemId } } }).then((res) => {
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
            else resolve(0);
        });
    })
}

exports.getTotalSQFT = (id) => {
    return new Promise(async (resolve, reject) => {
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
            if (!err) {
                // console.log(doc);
                resolve(doc);
            }
            else reject(err);
        });
    })
}