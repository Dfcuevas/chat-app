import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import dotenv from 'dotenv';
import { app, server } from "./socket/socket.js";
dotenv.config();
app.use(cookieParser()); // form parsing cookies
app.use(express.json()); // for parsing application/json
const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//TODO: Configure this server for the deployment
