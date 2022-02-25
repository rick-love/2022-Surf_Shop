import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()
// console.log(process.env);

// Connect to DB
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('Api is running...')
})

// ROUTES
app.use('/api/products', productRoutes)

// Error Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on Port ${PORT}`)
)
