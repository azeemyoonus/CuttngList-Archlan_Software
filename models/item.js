const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Item = new Schema({
    item: String,
    thichness: Number,
    width: Number,
    height: Number,
    qty: Number,
    totalSqft: Number,
    remarks: String,
    finish: String,
    ratesqft: Number,
    amount: Number,
    time: { type: Date, default: Date.now },
},
    { collection: "Items" })

module.exports = mongoose.model('items', Item)