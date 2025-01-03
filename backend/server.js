import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
dotenv.config()
const app = express();
const PORT =process.env.PORT|| 5000;

connectToMongoDB();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
	
	console.log(`Server Running on port ${PORT}`);
});