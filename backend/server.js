import express from 'express';
import dotenv from 'dotenv';
import connection_DB from './config/db_connection.js';
import taskRouter from './routes/taskRouter.js'
dotenv.config();

const app = express();


const PORT = process.env.PORT || 5555;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connection_DB();

app.get('/', function(req,res){
    res.send("API is running...");
});

app.use('/tasks',taskRouter);

app.listen(PORT,()=>{
    console.log(`server is runnign on ${PORT}`)
});