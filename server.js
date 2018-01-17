

var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var t = req.body.URL;
    var Model=require('./model.js');

    if (t.match(regex)) {
        // setupMongo()
        //alert("Successful match");

        
        var longURLfromHTML = req.body.URL;
        var shortURLfromMongo =Model(longURLfromHTML);
        var response = {
            "short URL":shortURLfromMongo,
            // "last_name":req.body.last_name
        };
    } else {
        //alert("Successful match");
        var response = 'INVALID URL!'
            // "last_name":req.body.last_name

    }
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})






