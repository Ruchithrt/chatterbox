import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/chatterbox");
    console.log("connected to databse");
  } catch (error) {
    console.log("Error in connecting");
  }
};

export default connectToMongoDB;
