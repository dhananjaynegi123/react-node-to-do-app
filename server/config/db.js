const mongoose = require('mongoose');

const conectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('DB conected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
module.exports = conectDB;
