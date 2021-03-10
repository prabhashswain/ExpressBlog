const express = require('express');
const router = require('./routes/userRoute');
const connect = require('./config/db');

const PORT = process.env.PORT || 3000

//conect database
connect()

const app = express();
//set view engine
app.set('view engine','ejs')
//body parser middleware
app.use(express.urlencoded({ extended:true }))
//set static files
app.use(express.static('./views'))

//router config
app.use('/',router)

//run express server
app.listen(PORT,()=>{
    console.log("server running");
})