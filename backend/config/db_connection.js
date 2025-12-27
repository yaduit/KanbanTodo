import mongoose from 'mongoose';

const connection_DB = async function(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected DB:", mongoose.connection.name)

        console.log("DataBase connected successfully");
    }catch(err){
        console.log("Database connection failed", err.message);
    }
}
export default connection_DB;