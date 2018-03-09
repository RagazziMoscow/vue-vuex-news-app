var express = require('express');
var app = express();

const port = process.env.PORT || 8000;

app.use('/', express.static(__dirname + '/public'));

app.listen(port, ()=> {
    console.log(`Сервер слушает порт ${port}`);
});
