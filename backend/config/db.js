import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://deployment_user:iZDUyoZiBXr7Omhx@store.zu8iqkv.mongodb.net/EchoMart", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
