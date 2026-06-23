// intro & setup and all about express js a begineer to know to get place
// get , post , put, patch , delete
//  req.params , req.query, req.body 
// express js advanced http modules

// my golden rule of studying why , what , how 

import express from "express";
// Assuming userData is a mutable array of objects. 
// Example: [{ id: 1, name: "Bob", displayname: "Bobby" }]
import userData from "./data/data.js";

const PORT = 8080;
const app = express(); // What: Initializes the Express application.

// --- MIDDLEWARE ---
// What: Parses incoming JSON payloads.
// Why: Without this, `req.body` will be `undefined` when clients send JSON data in POST/PUT/PATCH requests.
app.use(express.json());


// ==========================================
// 1. GET ALL USERS (or search by query)
// ==========================================
app.get("/api/v1/users", (req, res) => {
    // What: Extracting 'name' from the query string (e.g., ?name=Bob)
    const { name } = req.query;

    if (name) {
        // What: Filter users by name. (Optimized to be case-insensitive).
        const filteredUsers = userData.filter((user) => 
            user.name.toLowerCase() === name.toLowerCase()
        );
        
        // CRITICAL FIX: Added 'return' here.
        // Why: If we don't return here, Express will keep executing code and try to send 
        // the response again at the bottom, causing a fatal "Headers already sent" error.
        return res.status(200).send(filteredUsers);
    }

    // What: If no query parameters, return all users.
    return res.status(200).send(userData);
});


// ==========================================
// 2. GET SPECIFIC USER BY ID (Route Parameter)
// ==========================================
app.get("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    // Optimization: Handle invalid IDs (e.g., if someone types /api/v1/users/abc)
    if (isNaN(parsedId)) {
        return res.status(400).send({ message: "Invalid ID format. Must be a number." });
    }

    // What: Find the specific user.
    const user = userData.find((user) => user.id === parsedId);

    // Optimization: Handle user not found.
    // Why: If the user doesn't exist, we should inform the client rather than sending an empty response.
    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send(user);
});


// ==========================================
// 3. POST - CREATE A NEW USER
// ==========================================
app.post("/api/v1/users", (req, res) => {
    // Optimization: Removed 'id' from destructuring.
    // Why: The client shouldn't dictate their own ID; the server should generate it securely.
    const { name, displayname } = req.body;

    // Optimization: Basic validation
    // Why: Prevent creating "empty" users in our database.
    if (!name || !displayname) {
        return res.status(400).send({ message: "Name and displayname are required." });
    }

    const newUser = {
        // What: Auto-incrementing the ID based on array length. 
        // Note: In real databases, the DB handles this automatically (e.g., UUIDs or Auto-Increment).
        id: userData.length > 0 ? userData[userData.length - 1].id + 1 : 1, 
        name,
        displayname
    };

    userData.push(newUser);
    
    // What: 201 is the standard HTTP status code for "Created".
    return res.status(201).send({
        message: "User created successfully",
        data: newUser
    });
});


// ==========================================
// 4. PUT - FULLY UPDATE A USER
// ==========================================
// Why PUT?: PUT implies replacing the ENTIRE resource. If a field is missing in req.body, 
// theoretically it should be wiped out (though in basic setups, we just overwrite what's sent).
app.put("/api/v1/users/:id", (req, res) => {
    const { body, params: { id } } = req;
    const parsedId = parseInt(id);
    
    const userIndex = userData.findIndex((user) => user.id === parsedId);

    // CRITICAL FIX: Added 'return' here to prevent code from continuing if user isn't found.
    if (userIndex === -1) {
        return res.status(404).send({ message: "User Not Found" });
    }

    // What: Overwriting the user object.
    userData[userIndex] = {
        id: parsedId, // Ensure ID cannot be overwritten by the request body
        ...body 
    };

    return res.status(200).send({
        message: "User Updated",
        // CRITICAL FIX: Changed userData[userData] to userData[userIndex].
        // Why: userData is an array. You must pass a number (index) to access an item inside it.
        data: userData[userIndex] 
    });
});


// ==========================================
// 5. PATCH - PARTIALLY UPDATE A USER
// ==========================================
// Why PATCH?: PATCH implies changing only specific fields (e.g., only changing the displayname).
app.patch("/api/v1/users/:id", (req, res) => {
    const { body, params: { id } } = req;
    const parsedId = parseInt(id);
    
    const userIndex = userData.findIndex((user) => user.id === parsedId);

    if (userIndex === -1) {
        return res.status(404).send({ message: "User Not Found" }); // Added return
    }

    // What: Merge the old data with the new data.
    // Why: ...userData[userIndex] keeps the existing data, and ...body overwrites only the fields provided.
    userData[userIndex] = {
        ...userData[userIndex],
        ...body,
        id: parsedId // Protect the ID from being changed accidentally
    };

    return res.status(200).send({
        message: "User Partially Updated",
        data: userData[userIndex] // Fixed typo here as well
    });
});


// ==========================================
// 6. DELETE - REMOVE A USER
// ==========================================
app.delete("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    const userIndex = userData.findIndex((user) => user.id === parsedId);

    if (userIndex === -1) {
        return res.status(404).send({ message: "User Not Found" });
    }

    // What: Splice removes elements from an array. 
    // Argument 1: Index to start at. Argument 2: How many items to remove.
    const deletedUser = userData.splice(userIndex, 1);

    return res.status(200).send({
        message: "User successfully deleted",
        data: deletedUser[0]
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});