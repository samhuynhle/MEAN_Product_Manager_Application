const express = require('express');
const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/public/dist/public'));

require('./server/routes.js')(app);

app.listen(5000, ()=> {
    console.log("Listening on port 5000");
})
