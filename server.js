const express = require('express');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const withAuth = require('./middleware');
const PORT = process.env.PORT || 3001;
const routes = require("./routes");


const app = express();

const secret = 'mysecretsshhh';

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/workouts',

const mongo_uri = 'mongodb://localhost/reactreadinglist';
mongoose.connect(process.env.MONGODB_URI || mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});

app.use(express.static(path.join(__dirname, 'public')));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});

// app.get('/api/secret', withAuth, function(req, res) {
//   res.send('The password is potato');
// });

app.post('/api/register', function(req, res) {
  console.log("******res.body",req.body);
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the Cryptography!");
    }
  });
});

app.post('/api/authenticate', function(req, res) {
  const { username, password } = req.body;
  User.findOne({ username }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
        error: 'Incorrect email or password'
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
            error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
            error: 'Incorrect email or password'
          });
        } else {
          // Issue token
          const payload = { username };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)

// // Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// // Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
