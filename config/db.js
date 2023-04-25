const mongoose =require('mongoose')
const DB =mongodb+srv://sona:01071998@cluster0.fyn8tfk.mongodb.net/mern_fooddelivery;
mongoose.connect(DB,{
    useNewUrlParser:true
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message))
