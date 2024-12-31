const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/';


const conn = () => {
    mongoose.connect(DB_URL, {
        dbName: 'todo',
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = conn;
