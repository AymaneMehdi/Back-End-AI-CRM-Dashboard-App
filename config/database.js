import mongoose from "mongoose";
export const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  if (!mongoURI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }
  mongoose.set("strictQuery", true);
  const mongooseConnection = await mongoose.connect(mongoURI, {
    serverSelectionTimeoutMS: 10000,
  });
  console.log(
    `MongoDB connected: ${mongooseConnection.connection.host}/${mongooseConnection.connection.name}`,
  );
  return mongooseConnection;
};
