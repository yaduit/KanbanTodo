import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    
},{timestamps: true});

const task  = mongoose.model('task',taskSchema);

export default task;