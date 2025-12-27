import express from 'express';
import taskModel from '../models/task-model.js';
const router = express.Router();

router.post('/',async function(req,res){
    try{
        const {title, description} = req.body;
        const task = await taskModel.create({
            title: title,
            description: description,
            user: req.user._id
        })
        res.status(201).json({message: 'task created sucessfully',task});
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
});

router.get('/', async function(req, res){
    try {
        const tasks = await taskModel.find({user: req.user._id});

        return res.status(200).json({
            count: tasks.length,
            tasks
        });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'internal server error' });
    }
});


router.get('/:id', async function(req,res){
    let {id} = req.params;
    try{
        const task = await taskModel.findById(id);
        return res.status(200).json(task)
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
})

router.put('/:id',async function(req,res){
    let{id} = req.params;
    try{
        const task = await taskModel.findByIdAndUpdate({_id:id , user:req.user._id}, req.body,{new: true, runValidators: true})
        if(!task){
            return res.status(404).json({message: 'task not found'})
        }
        return res.status(200).json({message: 'task updated sucessfully',task})
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
})

router.delete('/:id',async function(req,res){
    let{id} = req.params;
    try{
        const task = await taskModel.findByIdAndDelete({_id:id, user:req.user._id})
        if(!task){
            return res.status(404).json({message: 'task not found'})
        }
        return res.status(200).json({message: 'task deleted sucessfully',task})
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
})

export default router;