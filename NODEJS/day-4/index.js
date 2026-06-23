// stream in js. ✅

// introduction
//  stream are not only for streaming video/audios
// understanding streams and buffers
//  create http server
// Downloading big files from server (a good way and a bad way)
//  copy files on file systems (a good way/ bad way)
// create custom streams (readable / writable / transform)
// string processing(a good way and bad way)
// pipes 


// learning way to handle data transfer

const http  = require("http")
const fs = require("fs")
const { Transform } = require("stream")

const server =  http.createServer((req,res)=>{
    // res.end("Hello server is up")

    // ? -----------1---------------- Downloading 
    // !1. Downloading file in a bad way ❌
    // fs.readFileSync() loads the entire file into RAM, blocking the event loop.
    //  Problems with large files (100MB+)


    // const file = fs.readFileSync("sample.txt")
    // res.end(file)


    // * Downloading file in a good way ✅
    // fs.createReadStream() with .pipe(res) sends data in chunks, avoiding memory waste
    
    // const readableStream = fs.createReadStream("sample.txt")
    // readableStream.pipe(res)
    

    // ? ------------2--------------- file copying 
    // ! bad approach of copying file (no stream use)
    // Problem
    // readFileSync() → poori file RAM me load karta hai.
    // Large file (100MB, 1GB) ho to memory waste hogi.
    // Synchronous hai, event loop block karega.

    // const file = fs.readFileSync("sample.txt") 
    // fs.writeFileSync("output.txt", file) 
    // res.end()

    // * Good Approach of downloading file (stream✅ - in built)
    // const readStream = fs.createReadStream("sample.txt")
    // const writeStream = fs.createWriteStream("output.txt")
    
    // readStream.on("data", (chunk)=>{
    //     console.log("CHUNK:", chunk)
    //     writeStream.write(chunk);
    // })

    
    // ? ------------3------------------ String Processing 

    // uppercase()
    // ipsum ---> Meet

    // ! bad approach for string processing 
    // const readStream = fs.createReadStream("sample.txt")
    // const writeStream = fs.createWriteStream("output.txt")


    // readStream.on("data", (chunk)=>{
    //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi , "Meet")

    //     writeStream.write(modifiedWord)
    // })
    // res.end()

    // * Good approach for string processing ✅
    const readStream = fs.createReadStream("sample.txt")
    const writeStream = fs.createWriteStream("output.txt")
    const transformStream = new Transform({
        transform(chunk, encoding , callback){
            const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi , "Meet")
            callback(null, modifiedWord)
        }
    })

    readStream.pipe(transformStream).pipe(writeStream)
    res.end()

})

server.listen(7200, ()=>{
    console.log("Server is running on :", 7200)
})




// stream ------> 2 types  
// 1. writable
// 2. readable 

// pipe()
// pipe() method in lhs = readable stream 
// pipe() method in rhs = writable stream 
 

// req : readableStream 
// res : writableStream


// transformStream -------> is both lhs and rhs 