import mongoose from 'mongoose';

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});

const user = mongoose.model('user', userModel);
export default user;