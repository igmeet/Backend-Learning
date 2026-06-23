// day - 3
// 1. path module ✅
// 2. events in node js ✅ 
// 3. streams in nodejs

// const EventEmitter = require("events")

// const emitter = new EventEmitter()

// emitter.on("GREET", (email, password)=>{ 
//     console.log(`Hello world. This is my username: ${email} and password is ${password}`)
// })   // emitter.on("eventName", callback)

// emitter.emit("GREET", "luffy@gmail.com", "sddgorqu9r1242")


// this how you actually do it
// emitter.on("GREET", (args)=>{
//     console.log(`This is my username : ${args.email}  and id is : ${args.id}`)
// })

// emitter.emit("GREET", {
//     email : "luffy@gmail.com",
//     id : "fnnffasfff202"
// })


// objective

// create a program using nodejs eventemitter that:

// listens for multiple types of user events(eg. : login, logout, purchase, and profile update)
// tracks how many times each event is emitted.
// logs a summary of all events occurencies when a spiecial summary event in triggered


// requirement

// create at least four custom events
// emit these events multiple times with different arguments (eg : username, item purchased)
// tracks and store the count of each event type
// define a summary event that logs a detailed report how many times each event was triggered


const EventEmitter = require("events")

const emitter = new EventEmitter()

const fs = require("fs")


const eventCounts = {
    login:0,
    logout : 0,
    purchase : 0,
    profileupdate : 0
}

let LogFile = "eventlog.json"

if(fs.existsSync(LogFile)){
    const data = fs.readFileSync(LogFile, "utf-8")
    Object.assign(eventCounts, JSON.parse(data))
}

function savecounts(){
    fs.writeFileSync(LogFile, JSON.stringify(eventCounts, null, 2))
}



emitter.on("LOGIN",(username)=>{
    eventCounts.login++
    console.log(`login : ${username}`)
    savecounts()
})

emitter.on("LOGOUT", (username)=>{
    eventCounts.logout++
    console.log(`logout : ${username}`)
    savecounts()
})

emitter.on("PURCHASE", (username, item)=>{
    eventCounts.purchase++
    console.log(`purchased by ${username} and item is ${item}`)
    savecounts()
})

emitter.on("PROFILE_UPDATE", (username, field)=>{
    eventCounts.profileupdate++
    console.log(`profile update of ${username} and field : ${field}`)
    savecounts()
})

emitter.on("SUMMARY", ()=>{
    console.log("\n Event Summary")
    console.log(`Login : ${eventCounts.login}`)
    console.log(`Logout : ${eventCounts.logout}`)
    console.log(`purchase : ${eventCounts.purchase}`)
    console.log(`profile update : ${eventCounts.profileupdate}`)
})

emitter.emit("LOGIN", "Meet")
emitter.emit("LOGOUT", "Meet")  
emitter.emit("PURCHASE", "Meet", "Iphone")
emitter.emit("PROFILE_UPDATE", "Meet", "Email address")

emitter.emit("SUMMARY")

