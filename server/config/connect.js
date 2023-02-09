const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(url, {
            useNewUrlParser: true,
        });

        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;