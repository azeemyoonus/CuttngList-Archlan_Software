const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    Item: String,
    Thickness: Number,
    Width: Number,
    Height: Number,
    QTY: Number,
    TotalSQFT: Number,
    Remarks: String,
    Finish: String,
    RateSQFT: Number,
    Amount: Number,
    time: { type: Date, default: Date.now },
},
    { collection: "Items" })

module.exports = mongoose.model('items', Item)