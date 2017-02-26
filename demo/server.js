// You can run the server using node demo/server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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
    const username = req.body.username;
    const password = req.body.password;
    const user = null;
    
    // Search through login data to see if user entered valid credentials
    for (let i = 0; i < userLogins.length; i++) {
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
        console.info("Server runnning on http://localhost:3000");
    }
});