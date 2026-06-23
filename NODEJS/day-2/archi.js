// const fs = require("fs")

// setTimeout(()=> console.log("Hello from SetTimeout"), 0) 

// setImmediate(()=> console.log("Hello from set Immediate"), 0) 

// console.log("Hello from top level code") 

// 1 console.log() - top level code
// 2 setTimeout()
// 3 setImmediate()






// sync = block operation. using crypto module to see how thread pool workers work (default worker = 4)

// password hashing
// let start = Date.now();
// const crypto = require("crypto")

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
//     console.log(`${Date.now() - start} ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
//     console.log(`${Date.now() - start} ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
//     console.log(`${Date.now() - start} ms Done`)
// })

// crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
//     console.log(`${Date.now() - start} ms Done`)
// })

let start = Date.now(); // 0

const crypto = require("crypto"); // cpu intensive task

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start} ms Done`) // 6
}) // 6-0 = 6

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start} ms Done`) 
}) 

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start} ms Done`) 
}) 

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start} ms Done`) 
}) 

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start} ms Done`) 
}) 

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start} ms Done`) 
}) 

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start} ms Done`) 
}) 

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=>{
    console.log(`${Date.now() - start} ms Done`) 
}) 

// thread pool worker working 
// 1243 ms Done 
// 1257 ms Done
// 1270 ms Done
// 1297 ms Done
// 2546 ms Done 
// 2610 ms Done
// 2622 ms Done
// 2681 ms Done