//importing express fw
const express=require("express")
const jwt=require("jsonwebtoken")
const cors=require("cors")

const dataservice =require("./dataservice")


//creating server app
const app = express()
app.use(express.json())

app.use(cors({
    origin:" http://localhost:4200"

}))


app.post('/register',(req,res)=>{
    const result = dataservice.register(req.body.usid,req.body.email,req.body.pswd)
    console.log(req.body.usid +"from reg api")
    
    result.then(resobj=>{
        res.status(resobj.statusCode).send(resobj)
    }) 
})

//login...............................................
app.post('/login',(req,res)=>{
    const result = dataservice.login(req.body.usid,req.body.pswd,)
     // res.status(result.statusCode).json(result)
     result.then(resobj=>{
        res.status(resobj.statusCode).send(resobj);
        
    });
});



//configuring port number
app.listen(3000,()=>{
    console.log("server running on port 3000")
})
