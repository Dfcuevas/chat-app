import express from "express";
import cookieParser from "cookie-parser";
import path from 'path';
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv';
import { app, server } from "./socket/socket.js";


dotenv.config();

app.use(cookieParser()) // form parsing cookies
app.use(express.json()) // for parsing application/json

const PORT = process.env.PORT || 5000

const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
  })
}

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
//TODO: Configure this server for the deployment