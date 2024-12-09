const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deepak:23092002@cluster0.tgq6aos.mongodb.net/area1');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));

db.once('open', function(){
    console.log('Succesfully connected to database');
});

module.exports = db;