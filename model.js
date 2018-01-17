

   model('www.abc3.com')
   var mongoose = require('mongoose');
   var promise = require('./setupModel.js');

   mongoose.connect('mongodb://localhost/urlDB', {
       useMongoClient: true,
       /* other options */
   });

   function model(currentURL){
    //引入mongoose第三方库
    // var mongoose = require('mongoose');
    // var promise = mongoose.connect('mongodb://localhost/urlDB', {
    //     useMongoClient: true,
    //     /* other options */
    // });
    //
    //
    // //mongoose.connect(uri);
    //
    // //可以把Schema理解为表中对象的结构
    // var UrlSchema = new mongoose.Schema({
    //     longURL: String,
    //     shortURL: String
    // });
    //
     var currentLongURL = currentURL;
     var shortURL = "initialURL"

       var finalURL = new Object();
    //UrlStorage is the name of the table
    //mongoose.model(collection, UrlSchema);

    //console.log(db.getCollection('urlstorages').find({}));

    //try to insert new collection

    //var Url = mongoose.model(collection);


    //find
       var spUrl = require('./setupModel.js');
       //find exist short url

       var finalURL = spUrl.count({ longURL: currentLongURL }, function (err, count) {
           if (err) return handleError(err);
           console.log('checkcheck:', count) // Space Ghost is a talk show host.

           if(count == 0){

               //var num = 0;
               var urlModel = promise;
               urlModel.distinct('shortURL').count().exec(function(err, c) {
                   var num = c;
                   console.log('Count is ' + num);
                   var shortUrl = setupURL(num);
                   var url = new promise({
                       longURL: currentLongURL,
                       shortURL: shortUrl
                   });
                   url.save(function (error, result) {
                       if (!error) {
                           console.log("Insert Success");
                           //console.log(result);
                           finalURL.shortURL= shortUrl;
                       }
                       else {
                           console.log("Insert Failed");
                       }
                   });
               })


           }else{
               console.log("shayebugan!");
               //findShortURL(currentLongURL);

               finalURL.shortURL= findShortURL(currentLongURL);
           }

       })

       console.log("...////"+finalURL.shortURL+"@@@");
       return finalURL.shortURL;
    }


   function findShortURL(lURL){
       var urlModel = promise;
       urlModel.findOne({longURL: lURL}, function (err,result) {
           if (err) return handleError(err);
           console.log('the short url is'+ result.shortURL)
           return result.shortURL;
       })

   }


    function setupURL(countOfCurrentURL) {

        if(countOfCurrentURL<=26){

            var s = String.fromCharCode(0x60+countOfCurrentURL);
            return "00000"+s;
        }
        if(countOfCurrentURL>26 && countOfCurrentURL<=52){

            var s = String.fromCharCode(0x60+countOfCurrentURL).toUpperCase();
            return "00000"+s;
        }else{
                var num = countOfCurrentURL-52;
                var len = num.toString().length;
                while(len < 5) {
                    num = "0" + num;
                    len++;
                }
                return num+"Z";


        }

    }
   module.exports= model;


    // url.save(function (error, result) {
    //     if (!error) {
    //         console.log("Insert Success");
    //         //console.log(result);
    //     }
    //     else {
    //         console.log("Insert Failed");
    //     }
    // });

    //
    // var urls = mongoose.model('UrlStorage');
    // console.log(urls);

    // var urlModel = promise.model("UrlStorage",UrlSchema);
    // urlModel.count({longURL: "http://mongodb.github.io/aaaaaaaaaaaaaa"}, function(err, c) {
    //     console.log('Count is ' + c);
    // })



    // //find specific data
    // function(err, urlDB) {
    //         mongoose.model("UrlStorage").find({}, { _id: false }).toArray(function(err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //         db.close();
    //     });

    // var MongoClient = require('mongodb').MongoClient;
    // var url = "mongodb://localhost/";
    // MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("urlDB");
    //     dbo.collection("UrlStorage").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         console.log(result.length);
    //         db.close();
    //     });
    // });
