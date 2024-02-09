import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // adding .js is must when using import and not require
import messageRoutes from "./routes/messageRoutes.js";
import connectToMongoDB from "./model/db.js";

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("hello!");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`listening at port ${PORT}`);
});
