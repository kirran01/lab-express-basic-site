console.log("god is good");
const express = require("express");
const app = express();

app.use(express.static('public'))


app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
 
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// We create our own server named app
// Express server will be handling requests and responses
app.listen(3000, () => {
  console.log("server up");
});
