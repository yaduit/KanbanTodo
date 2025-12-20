import jwt from 'jsonwebtoken';

export const isLoggedIn = async function(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message: 'something went wrong, please Login'});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.userId = decoded.id;// to link with the login user basically an id to enter
        next();
    }catch(error){
        return res.status(401).json({message: 'something went wrong, please login'});
    }
}