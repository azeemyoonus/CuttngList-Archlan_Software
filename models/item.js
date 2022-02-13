const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    _id: Number,
    Date: String,
    SiteName: String,
    ClientName: String,
    ClientPhone: Number,
    DeliveryDate: String,

    Items: [{
        ItemName: String,
        Thickness: Number,
        Width: Number,
        Height: Number,
        QTY: Number,
        TotalSQFT: Number,
        Remarks: String,
        Finish: String,
        RateSQFT: Number,
        Amount: Number,
    }],
    TotalAmount: Number,
    TotalSQFT: Number,
    time: { type: Date, default: Date.now },
},
    { collection: "Items" })

module.exports = mongoose.model('items', Item)