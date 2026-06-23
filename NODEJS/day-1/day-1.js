// DAY - 1 
// 1. What is nodejs ✅
// 2. Node js installation ✅
// 3. Hello world nodejs ✅
// 4. modules in nodejs  : fs ✅ ,http,os,path 
// 5. file handling in node js - write , read, append, unlink ✅
// 6. how nodejs works  - nodejs achitecture ✅



// const fs = require("fs");
// const os = require("os");

// console.log(os.cpus().length)

//  sync blocking code , async non blocking code



// write ✅

// sync
// fs.writeFileSync("./text.txt","Hey world this sync code");

// async
// fs.writeFile("./text.txt", "hello world this is async code bro.", (err)=>{
//     console.log(err);
// })


// read ✅

//  sync
// const res = fs.readFileSync("./text.txt", "utf-8");
// console.log(res);

//  async
// fs.readFile("./text.txt", "utf-8", (error, response)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(response)
//     }
// })


// update ✅

//  sync
// fs.appendFileSync("./text.txt", new Date().toDateString());

// async 
// fs.appendFile("./log.txt", `Hello this is Ig Meet can i get date of logged in on ${new Date().toDateString()}\n`, (err, res)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(res)
//     }
// })


// ✅ Delete
// fs.unlinkSync("./text.txt")

// fs.unlink("./text.txt", (err,res)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(res)
//     }
// })

// * cpSync
// * unlinkSync
// * statSync
// * mkdirSync   



