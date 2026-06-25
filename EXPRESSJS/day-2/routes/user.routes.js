import { Router } from "express";

const userRouter = Router();

userRouter.get("/create-user", (req,res)=> {
    res.send("User Page")
})

userRouter.get("/getAllUser", (req,res)=> {
    res.send("Get all user")
})

userRouter.get("/getUserById", (req,res)=> {
    res.send("get user by id")
})

export default userRouter; 