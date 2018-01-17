var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/urlDB', {
    useMongoClient: true,
    /* other options */
});

var Schema = mongoose.Schema;
//mongoose.connect(uri);

//可以把Schema理解为表中对象的结构
var UrlSchema = new mongoose.Schema({
    longURL: String,
    shortURL: String
});

module.exports = mongoose.model('urlstorages', UrlSchema);