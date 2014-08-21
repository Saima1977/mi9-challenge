/*
* Author: Saima Shahid
* Date: 20/08/2014
* Description: Web Service that returns a tailered response based on posted JSON for Mi9
* Node.js dependencies: Express, BodyParser
*/

var express = require('express');
var lodash = require('lodash');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());
app.use(errorHandler);

function errorHandler(err, request, response, next) 
{
    console.log(err);
    response.status(400);
    response.json({ "error": "Could not decode request: JSON parsing failed" })
}

app.post('/', function(request, response) {
    var payload = request.body.payload;
    var shows = [];

    payload.forEach(function(value)
    {
        var drm = value.drm;
        var episodeCount = value.episodeCount || 0;

        if(drm && episodeCount > 0)
        {
            shows.push({
                        image: value.image.showImage,
                        slug: value.slug,
                        title: value.title
            });
        }
    });

    response.send(
                {
                    response: shows
                });
});


var PORT = process.env.PORT || 3000;

console.log('Listening on :' + PORT);
app.listen(PORT);