const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// BOdy parser middleware
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
// DB Config
const db = require('./config/keys');

// Connect to MongoDB
mongoose
    .connect(db.mongoURI)
    .then(() => console.log('Successful Database Connection '))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);

// app.get('/',(req,res) => res.send('Hello there'));

// Use Routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

if( process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on port ${port}`));
