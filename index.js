import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'


const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoose");
    } catch (err) {
        throw err
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoose disconnected");
})

//middleware

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)


app.listen(3300, () => {
    connect()
    console.log("Connect to backend server");
})