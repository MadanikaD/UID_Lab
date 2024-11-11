const mongoose = require('mongoose');

const db_url = "mongodb://localhost:27017/Health";

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(db_url);
        console.log('Db Connected');
    } catch (error) {
        console.log(error);
        console.log('DB Connection Error');
    }
};

module.exports = { db };
