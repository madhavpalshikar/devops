const express = require('express');
const app = express();
var redis = require("redis");
var publisher = redis.createClient({host: 'redis'});


app.get('/', (req, res) => {
    publisher.publish("notification", "{\"message\":\"Hello world from Asgardian!\"}", function(){
        //process.exit(0);
       });
       res.end();
});

app.listen(8300, function () {
    console.log('Example app listening on port 8300! - Web')
});