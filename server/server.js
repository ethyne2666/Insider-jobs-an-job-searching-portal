import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node"
import { clerkWebhooks } from './controllers/webhooks.controller.js'
import companyRoutes from './routes/company.routes.js'
import connectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/user.routes.js'
import {clerkMiddleware} from '@clerk/express'



// Initialize Express

const app = express()

//connect to data base

await connectDB()
await connectCloudinary()

//Middlewares

app.use(clerkMiddleware())

app.use(express.json())
app.use(cors())

//Routes

app.get('/',(req,res)=>res.send('API Working'))

// Correct webhook route (raw body required)
app.post(
  '/api/webhooks/clerk',
  express.raw({ type: 'application/json' }),
  clerkWebhooks
)

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});


app.use('/api/company',companyRoutes)
app.use('/api/jobs',jobRoutes)
app.use('/api/users', userRoutes)

//port

const PORT = process.env.PORT || 5000

Sentry.setupExpressErrorHandler(app);

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
})