
const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors');


//type : npm run start

const Ip = require('./schema/ip');
const recordRoute = express.Router();
const app = express();
const port = 5000;

app.use(express.json())
app.use(cors({origin:true}));

mongoose.connect("mongodb+srv://admin:admin@cluster0.rgwtd.mongodb.net/?retryWrites=true&w=majority",() => {
    console.log("Database connected")
},
e => console.error(e))

// run(true)
async function run(bool) {
    try{
        if(bool == true)
        {
            const data = await Ip.create({
            sldc : "BBMB",
            ip : "162.12.110.17",
            submitBy : "CISO-BBMB",
            activeNow : true,
        })
        console.log(data)
    }
    } catch (e) {
        console.log(e.message)
    }
}



app.get('/',(req,res) => {
    res.send('Hello world!')
})

app.get('/db',async (req,res) => {
    // data = await Ip.findById("628c34554811475803cf3e98");
    data = await Ip.find({});
    res.json(data);
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})