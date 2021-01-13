const express = require('express');
const app = express();
var redis = require("redis");
var subscriber = redis.createClient();
subscriber.on("message", function (channel, message) {
 console.log("Message: " + message + " on channel: " + channel + " is arrive!");
});
subscriber.subscribe("notification");

app.listen(8302, function () {
    console.log('Example app listening on port 8302 - service2!')
})