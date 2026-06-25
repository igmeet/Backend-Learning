import express from "express";
import publicRoutes from "./routes/public.routes.js"

const app = express();
const PORT = 8080;

// Inbuilt middleware
app.use(express.json());

// middleware 
app.use("/public", publicRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running http://localhost:${PORT}`);
}) 