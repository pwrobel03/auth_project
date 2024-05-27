import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => console.log("Connected to MongoDB")).catch(e => console.log(e))

const app = express();
const PORT = 3000
app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
})