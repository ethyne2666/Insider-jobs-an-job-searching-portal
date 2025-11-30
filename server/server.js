import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'



// Initialize Express

const app = express()

//connect to data base

await connectDB()

//Middlewares

app.use(cors())
app.use(express.json())

//Routes

app.get('/',(req,res)=>res.send('API Working'))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`)
})