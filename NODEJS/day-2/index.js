// DAY-2
// 1. Using http module
// 2. What is global objects in node js 
// 3. module fuction executer
// 4. how nodejs works advance



// create server using http module ✅
// const http = require("http")
// const PORT = 3800

// const myServer = http.createServer((request,response)=>{
//     console.log(request)
//     response.end("Hello from server")
// })

// myServer.listen(PORT, ()=>{
//     console.log(`Server is connected and running on port ${PORT}`)
// }) 




// using http module and fs add date in log file
// const http = require("http")
// const fs = require("fs")

// const PORT = 8080 

// const server = http.createServer((req,res)=>{
//     // res.end("Hello through server")

//     const Log = `${Date.now()}: From ${req.url} New Request Received\n`

//     fs.appendFile("log.txt", Log, (err)=>{
//         if(err){
//             console.error("Error writing to the log file: ", err)
//             res.statusCode = 500;
//             res.end("Internal Server Error")
//             return; 
//         }
//         res.end("Hello from server")
//     })
// })

// server.listen(PORT, ()=>{
//     console.log(`Server is running on port ${PORT}`)
// })


const http = require("http")
const fs = require("fs")
const PORT = 8080


const server = http.createServer((req,res)=>{

    const Log = `${Date.now()} : & From ${req.url} New Request Recieved\n`

    fs.appendFile("log.txt", Log, (err)=>{
        if(err){
            console.log("Error writing to the log",err)
            res.statusCode = 500
            res.end("Internal Server Error")
            return;
        }
    })

    res.end("hello from server")
})

server.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})







