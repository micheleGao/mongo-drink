//mongo atlas connection

 require('dotenv').config();
// const dotenv = require("dotenv");
// dotenv.config();
const mongoose = require('mongoose');


//mongo url and connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

//connect to mongo
mongoose.connect(
    "https://afternoon-plateau-17980.herokuapp.com/",
    // "mongodb://localhost:3000/drinks",
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    },
    ()=>{
        console.log('connection with mongo is established!!!');
    }
);

//defined callback functions for various events, in the event of error connection ot success
db.on('error', (err) => console.log(err.message + ' is Mongodb not running?'));
db.on('connected', () => console.log('mongo connected:' + mongoURI ));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on('open', () => {
	console.log('✅ connection made!');
});
// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose;