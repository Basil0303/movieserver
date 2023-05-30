// import mongosh
const mongoose=require("mongoose")

//connection string 
mongoose.connect("mongodb://localhost:27017/Movies_App",{
useNewUrlparser:true
})

//define model 
 const Movie=mongoose.model('Movie',{
    user_id:Number,
    email:String,
    password:String,
  


})
module.exports={
    Movie
}