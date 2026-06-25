// middleware in express is function that executes during req, res cycle. 
// req.object and res.object dono ka acess hota hai
// (req,res,next)

// features 
// can be applied globally or to specific routes.
// logging, authentication and error handling
// middleware execute in order

import express from "express";

const app = express();
// app.use(express.json());  // inbuilt middleware

// global middleware --> this run everytime
function SayHiMiddleware(req, res, next){
    console.log("Hi i am middleware");
    next(); 
}

// app.use(SayHiMiddleware); // global

app.get("/", SayHiMiddleware, (req,res)=> { // specific routes middleware
    res.send("Hello World");
});

app.get("/user", (req,res)=> {
    res.send("User Page")
})

app.listen(3000, ()=>{
    console.log(`Server is running 3000`);
});


// global middleware
// specific route middleware 
// inbuilt middleware
