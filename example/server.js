// You can run the server using node demo/server.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Allow Cross Origin Requests
app.use(cors());
app.options('*', cors());
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  } else {
    return next();
  }
});*/

// Static data to simulate having users
const userLogins = [{
        username: "jscreen",
        password: "screen1"
    }, {
        username: "bkurek",
        password: "kurek1"
    }, {
        username: "ccygnus",
        password: "cygnus1"
    }
];
const userDetails = [{
        name: "Joe Screen",
        email: "jscreen@flatline.org",
        age: 20
    }, {
        name: "Brian Kurek",
        email: "bkurek@flatline.org",
        age: 20
    }, {
        name: "Christian Cygnus",
        email: "ccygnus@flatline.org",
        age: 20
    }
];
// Parse body so we can get POST request params on req.body
app.use(bodyParser.json());


// Route for logging in
app.post('/login', (req, res) => {

    var username = req.body.username;
    var password = req.body.password;
    var user = null;
    
    // Search through login data to see if user entered valid credentials
    for (var i = 0; i < userLogins.length; i++) {
        if (username === userLogins[i].username && password === userLogins[i].password) {
            user = userDetails[i];
            break;
        }    
    }

    // if the user successfully logged in, return his/her details
    if (user) {
        res.json(user);
    }

    else {
        res.json({ message: "Invalid credentials" });
    }

});

// Listen on port 3000
app.listen(3000, err => {
    if (!err) {
        console.info("Server runnning on http://localhost:3000 now");
    }
});