import mongoose from 'mongoose';

const userShema = mongoose.Schema({
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

const user = mongoose.model('user', userShema);
export default user;