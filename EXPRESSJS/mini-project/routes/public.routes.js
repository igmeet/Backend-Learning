import express from "express";

const router = express.Router();

//generate token route
// home route

router.get("/generate-token", (req,res)=> {
    const token = "token";

    res.status(200).send({
        message : "Token generated please dave it for future use",
        token : token
    })
})

router.get("/", (req,res)=> {
    res.status(200).send({
        message: "Welcome to home page"
    })
})

export default router