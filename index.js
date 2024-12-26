import express from "express";
import authMiddleware from "./auth.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(authMiddleware);

app.get("/", (req, res) =>{
	res.send("Hello!")
})

app.listen(port, () =>{
	console.log(`Server running on port ${port}`)
})