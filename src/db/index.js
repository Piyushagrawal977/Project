import mongoose from 'mongoose'
import 'dotenv/config'
import { DB_NAME } from '../constants.js'
const connectDB=async ()=>{
    try{   
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch (error){
        console.log("MONGODB connenction FAILED",error);
        process.exit(1);
    }
}

export default connectDB;