import mongoose from "mongoose";

const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Connected to existing DB");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("DB error :", error);
  }
};
