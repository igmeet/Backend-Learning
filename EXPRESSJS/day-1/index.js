// import express from "express";
// import userData from "./data/data.js"

// const PORT = 8080;

// const app = express(); // creating app 
// app.use(express.json())

// // 1. Get request (it is for fetching data from server)

// // get data in ?key=value pair
// // http://localhost:8080/api/v1/users?name=Bob 

// // home endpoint
// app.get("/", (req,res)=>{
//     res.status(200).send("Hello World")
// })

// // api endpoint with industry standard
// app.get("/api/v1/users", (req,res)=>{
    

//     // req query parameters
//     // console.log(req.query) 

//     const {name} = req.query; //  /api/v1/users?name=Bob
    

//     if(name){
//         const user = userData.filter((user)=>{
//             return user.name === name;
//         })
//         res.status(200).send(user);
//     }
//     res.status(200).send(userData);
// })


// // router parameter --- get specific data 
// // get data through id
// app.get("/api/v1/users/:id", (req,res)=>{
//     //  console.log(req.params);  // api/v1/users/:id
//     //  res.status(200).send("User Found")

//     // destructure
//     const {id} = req.params;
//     const parsedId = parseInt(id);

//     const user = userData.find((user)=> user.id === parsedId 
//     )
//     res.status(200).send(user)
// })


// // 2. Post Request --> send data to server
// app.post("/api/v1/users", (req,res)=>{
//     console.log(req.body) // used in POST/PUT/PATCH requests. // you need body parsing middleware like express.json()
    
//     const {id , name, displayname} = req.body;

//     // console.log(id, name, displayname);
//     // res.status(201).send("Data has been added successfully")

//     const newUser = {
//         id : userData.length + 1,
//         name,
//         displayname
//     }
//     userData.push(newUser)
//     res.status(201).send({
//         message : "User created",
//         userData:newUser
//     })
// })


// // 3. put method --> update all field
// app.put("/api/v1/users/:id", (req,res)=>{
//     // console.log(req.body, req.params)
//     // res.status(200).send("User updated")

//     const {
//         body,
//         params : {id},
//     } = req;

//     const parsedId = parseInt(id)
//     const userIndex = userData.findIndex((user)=> user.id === parsedId)

//     if(userIndex === -1) {
//         res.status(404).send("User Not Found");
//     }
//     userData[userIndex] = {
//         id : parsedId,
//         ...body // name : body.name, displayname : body.displayname
//     }

//     res.status(200).send({
//         message : "User Updated",
//         data : userData[userData]
//     })
// })


// // 4. patch method --> update specific fields
// app.patch("/api/v1/users/:id", (req,res)=>{
//     // console.log(req.body, req.params)
//     // res.status(200).send("User updated")

//     const {
//         body,
//         params : {id},
//     } = req;

//     const parsedId = parseInt(id)
//     const userIndex = userData.findIndex((user)=> user.id === parsedId)

//     if(userIndex === -1) {
//         res.status(404).send("User Not Found");
//     }
//     userData[userIndex] = {
//         ...userData[userIndex],
//         ...body 
//     }

//     res.status(200).send({
//         message : "User Updated",
//         data : userData[userData]
//     })
// })

// // 5. delete ---> delete data from server


// app.listen(PORT, (req,res)=>{
//     console.log(`Server is running on port ${PORT}`);
// })



import express from "express"
import userData from "./data/data.js"

const PORT = 8080
const app = express()

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})