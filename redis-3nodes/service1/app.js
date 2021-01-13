const express = require('express');
const app = express();
var redis = require("redis");
var subscriber = redis.createClient({host: 'redis'});
subscriber.on("message", function (channel, message) {
 console.log("Message: " + message + " on channel: " + channel + " is arrive!");
});
subscriber.subscribe("notification");

app.listen(8301, function () {
    console.log('Example app listening on port 8301 - service1!')
})