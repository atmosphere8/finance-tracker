import mongoose from "mongoose"

const mongo_connection = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@mongo:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authMechanism=DEFAULT&authSource=admin`
    )
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.log(error)
  }
}

export default mongo_connection
