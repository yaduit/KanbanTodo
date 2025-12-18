import express from 'express';
import dotenv from 'dotenv';
import connection_DB from './config/db_connection.js';
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

connection_DB();

app.get('/', function(req,res){
    res.send("API is running...");
})

app.listen(process.env.PORT || 5555,function(){
    console.log(`server is runnign on ${process.env.port}`)
});