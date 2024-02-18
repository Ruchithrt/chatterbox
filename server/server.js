import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // adding .js is must when using import and not require
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectToMongoDB from "./model/db.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

dotenv.config();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello!");
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`listening at port ${PORT}`);
});
