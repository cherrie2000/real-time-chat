import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import mongoose from "mongoose";
dotenv.config()
const app = express();
const PORT =process.env.PORT|| 5000;

connectToMongoDB();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(express.json());
app.use('/api/auth',authRoutes)

app.listen(PORT, () => {
	
	console.log(`Server Running on port ${PORT}`);
});