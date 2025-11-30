import mongoose from 'mongoose'

// Function to connect to mongoDB database

const connectDB = async()=> {
    mongoose.connection.on('connected', ()=> console.log('Data base connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/insider-jobs`)
}


export default connectDB