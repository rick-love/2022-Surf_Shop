import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected to DB: ${conn.connection.host}`.cyan.underline)
  } catch (err) {
    console.error(err.message, 'Error connecting to Database'.red.inverse)
    process.exit(1)
  }
  
}

export default connectDB
