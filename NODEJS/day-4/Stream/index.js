const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{

//? ----1----- downloading big file from server
    // 1. bad way ❌ through traditional approach using sync
    // may server can crash

    // const file = fs.readFileSync("sample.txt")
    // res.end(file) 


    //2. good way ✅ --> using streaming 
    // const readableStream = fs.createReadStream("sample.txt") // left
    // readableStream.pipe(res) // right
    // // res.end() 

    // ? -----2----- copy file 
    // bad way for copying file ❌
    // const file = fs.readFileSync("sample.txt") // left
    // fs.writeFileSync("output.txt", file) // right
    // res.end()

    // good way (stream) ✅
    // const readStream = fs.createReadStream("sample.txt")
    // const writeStream = fs.createWriteStream("output.txt")

    // readStream.on("data", (chunk)=>{
    //     console.log("CHUNK: ", chunk)
    //     writeStream.write(chunk)
    // })
    
    // ? --------3------- string processing 
    // uppercase()
    // ipsum ---> Meet

    const readStream = fs.createReadStream("sample.txt")
    const writeStream = fs.createWriteStream("output.txt")


    // bad approach ❌
    // readStream.on("data", (chunk)=>{
    //     const modifiedWord =  chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "Meet")
    //     writeStream.write(modifiedWord)
    // })
    // res.end()

    // * good approach 
    const {Transform, pipeline} = require("stream")

    const transformStream = new Transform({
       transform(chunk, encoding, callback){
          const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi , "Meet")
          callback(null, modifiedWord)
        }

    })
    // readStream.pipe(transformStream).pipe(writeStream) //good way
  pipeline(readStream, transformStream, res, (err)=>{
        console.log(err)   // good way with more secured version of transform through pipelines method
    })
    // res.end(pipelineUser)
})

server.listen(8080, ()=>{
    console.log("Server is running on: ", 8080)
})




// stream : writable and readable

// pipe() 
// lsh = readable 
// rsh = writable 

// req = readable
// res = writable

















// const http = require("http")

// const fs = require("fs")

// const server = http.createServer((req,res)=>{

//     // ? -----------1------------- Downloading
//     //! bad way doing through synchroous way. ❌
//     // const file = fs.readFileSync("sample.txt")
//     // res.end(file)  // crash 

//     //* good way with streaming ✅
//     const readableStream = fs.createReadStream("sample.txt")
//     readableStream.pipe(res)     
// // pipe() left = readableStream and right = res
// // data we getting in chunk (64kb)
// // no crash

// // pipe()
// // left = readable        
// // right = writable


// // req = readable 
// // res = writable



// })

// server.listen(8000, ()=>{
//     console.log("Server is running on: ", 8000)
// })
 