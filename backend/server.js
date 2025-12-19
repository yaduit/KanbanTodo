import express from 'express';
import dotenv from 'dotenv';
import taskModel from './models/task-model.js';
import connection_DB from './config/db_connection.js';
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

connection_DB();

app.get('/', function(req,res){
    res.send("API is running...");
});

app.post('/tasks',async function(req,res){
    try{
        const {title, description} = req.body;
        const task = await taskModel.create({
            title: title,
            description: description
        })
        res.status(201).json({message: 'task created sucessfully'},task);
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
});

app.get('/tasks', async function(req,res){
    try{
        const tasks = await taskModel.find({});
        if(tasks.length === 0){
            return res.status(200).json({count: tasks.length,tasks});
        }
        
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
})

app.get('/tasks/:id', async function(req,res){
    let {id} = req.params;
    try{
        const task = await taskModel.findById(id);
        return res.status(200).json(task)
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
})

app.put('/tasks/:id',async function(req,res){
    let{id} = req.params;
    try{
        const task = await taskModel.findByIdAndUpdate(id, req.body,{new: true, runValidators: true})
        if(!task){
            return res.status(404).json({message: 'task not found'})
        }
        return res.status(200).json({message: 'task updated sucessfully',task})
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
})

app.delete('/tasks/:id',async function(req,res){
    let{id} = req.params;
    try{
        const task = await taskModel.findByIdAndDelete(id)
        if(!task){
            return res.status(404).json({message: 'task not found'})
        }
        return res.status(200).json({message: 'task deleted sucessfully',task})
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
})

app.listen(process.env.PORT || 5555,function(){
    console.log(`server is runnign on ${process.env.port}`)
});