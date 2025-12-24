import express from 'express';
import {registerUser,LoginUser,LogoutUser} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', LoginUser);
router.post('/logout', LogoutUser);

export default router;
