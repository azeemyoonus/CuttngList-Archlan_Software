const mongoose = require('mongoose');
const connectionUrl = process.env.DB_CONN_STR;

module.exports.dbConnect = (done) => {
    mongoose.connect(connectionUrl, {
        useNewUrlParser: true,

    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {        
        done()
    });

}