//引入mongoose第三方库
var mongoose = require('mongoose');
//UrlStorage is the name of the database
//var uri = "mongodb://localhost/urlDB";
// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://localhost/urlDB', {
    useMongoClient: true,
    /* other options */
});
//mongoose.connect(uri);

//可以把Schema理解为表中对象的结构
var UrlSchema = new mongoose.Schema({
    longURL: String,
    shortURL: String
});

//UrlStorage is the name of the table
mongoose.model('UrlStorage', UrlSchema);

//try to insert new collection

var Url = mongoose.model('UrlStorage');
    var url = new Url({
    longURL: "http://mongodb.github.io/aaaaaaaaaaaaaa",
    shortURL: ""
});
url.save(function (error, result) {
    if (!error) {
        console.log("Insert Success");
    }
    else {
        console.log("Insert Failed");
    }
});