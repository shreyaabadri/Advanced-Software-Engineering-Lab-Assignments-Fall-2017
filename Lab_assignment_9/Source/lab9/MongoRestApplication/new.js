var express = require('express');
var app = express();
var request = require('request');
app.get('/getPlace', function (req, rest) {
    var result={
        'req': []
    };
    request('https://maps.googleapis.com/maps/api/place/search/json?location=38.9822,-94.6708&radius=1000&type=clothing_store&sensor=true&key=AIzaSyDaTL908A9dnXKVugW7WpF4ZHoJuSSgbBQ', function (error, response, body) {
        //Check for error
        if(error){
            return console.log('Error:', error);
        }
        //Check for right status code
        if(response.statusCode !== 200){
            return console.log('Invalid Status Code Returned:', response.statusCode);}
        //All is good. Print the body
        body = JSON.parse(body);
        var res = body.response.results;
        for(var i=0;i<res.length;i++)
        {
            result.req.push({'name': res[i].name, 'rating' : res[i].rating,'vicinity':res[i].vicinity.toString()});
        }
        rest.contentType('application/json');
        rest.write(JSON.stringify(result));
        rest.end();
    });
    console.log(result);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})