import express from 'express';
import dotenv from 'dotenv';
import connection_DB from './config/db_connection.js';
import authRouter from './routes/authRouter.js';
import taskRouter from './routes/taskRouter.js'
import isLoggedIn from './middleware/isLoggedIn.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(cors({
    origin : 'http://localhost:5173',
    credentials: true
}))

const PORT = process.env.PORT || 5555;
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

connection_DB();

app.get('/', function(req,res){
    res.send("API is running...");
});

app.use('/auth', authRouter);
app.use('/tasks',isLoggedIn,taskRouter);

app.listen(PORT,()=>{
    console.log(`server is runnign on ${PORT}`)
});