import userModel from '../models/user-model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req,res)=>{
    let {name , email , password} = req.body;
    try{
        const user = await userModel.findOne({email})
        if(user){
            return res.status(400).json({message: 'user alredy exists'})
        }
       const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword
        });
        return res.status(201).json({message: 'user created sucessfully', newUser});
    }catch(error){
        res.status(500).json({message: 'internal server error'});
        console.log(error.message);
    }
}


export const LoginUser = async (req,res) =>{
    let{email, password} = req.body;
    try{
        const userExists = await userModel.findOne({email});
        if(!userExists){
            return res.status(401).json({message: 'invalid credentials'});
        }
        const isMatch = await bcrypt.compare(password, userExists.password)
        if(!isMatch){
            return res.status(401).json({message: 'invalid credentials'});
        }
        const token = jwt.sign({id: userExists._id}, process.env.JWT_KEY,{ expiresIn : '1h'})
        res.cookie('token', token,{
            httpOnly: true,
            sameSite: 'lax',     
            secure: false,      
            maxAge: 60 * 60 * 1000
        });
        return res.status(200).json({message: 'login sucessfull', token});
    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: 'something went wrong'});
    }
}

export const LogoutUser = async (req,res)=>{
    res.clearCookie('token', { path: '/' });
    return res.status(200).json({message: 'logout sucessfull'});
}