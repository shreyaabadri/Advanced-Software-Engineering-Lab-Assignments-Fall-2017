var express = require('express');
var app = express();
//var cors=require('cors');
var request = require('request');
//app.use(cors());

app.get('/calories', function (req, res,next) {
    var result = {
        'calo':[]
    };
    var z=req.query.name;
    console.log(z);
    request("https://api.edamam.com/api/nutrition-data?app_id=0300d2b8&app_key=0b8035c6de6a22ad7a39bf2c3021ea69&ingr=1%20large%20"+z, function (error, response, body) {
        //Check for error
        if (error) {
            return console.log('Error:', error);
        }
        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }
        body = JSON.parse(body);
        result.calo.push({"calories":body.calo,"quantity":body.totalWeight});

        //   res.contentType('application/json');
        //  res.write(JSON.stringify(result));
        //  res.end();
        request("https://kgsearch.googleapis.com/v1/entities:search?query="+z+"&key=AIzaSyBOOL4aYKHQrymL99qBna05V6Q0JTOHRgU&limit=1&indent=True",function (error1, response1, body1) {
            if (error1) {
                return console.log('Error:', error1);
            }
            if (response1.statusCode !== 200) {
                return console.log('Invalid Status Code Returned:', response1.statusCode);
            }
            body = JSON.parse(body1);
            result.calo.push({"link": body.itemListElement[0].result.image.contentUrl})
            res.contentType('application/json');
            res.write(JSON.stringify(result));

            res.end();
        });
    });
    console.log(result);



})
var server = app.listen(8082,"127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
})
