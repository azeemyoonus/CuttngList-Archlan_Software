var convertRupeesIntoWords = require('convert-rupees-into-words');

exports.rupeesToWords=(amount)=>{
    return new Promise((resolve, reject)=>{
        inWords= convertRupeesIntoWords(amount);
        resolve(inWords)
    })
}