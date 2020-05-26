var express = require('express');
var path = require('path');

var app = express();

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.listen(process.env.PORT || 8080, () => console.log("[√] Express server running!"));