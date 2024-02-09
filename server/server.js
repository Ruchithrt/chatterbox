import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // adding .js is must when using import and not require
import connectToMongoDB from "./model/db.js";

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("hello!");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`listening at port ${PORT}`);
});
