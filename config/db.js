const mongoose = require('mongoose');

module.exports = connect = async()=>{
    try {
        const response = await mongoose.connect('mongodb://localhost/Blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log("connected");
    } catch (error) {
        console.log(error);
    }
}