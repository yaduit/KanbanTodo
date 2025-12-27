import express from 'express';
import {registerUser,LoginUser,LogoutUser} from '../controllers/authController.js';
import isLoggedIn from '../middleware/isLoggedIn.js'
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', LoginUser);
router.post('/logout', LogoutUser);

router.get('/me', isLoggedIn, (req, res) => {
  res.status(200).json({
    user: {
      _id: req.user._id,
      email: req.user.email,
      name: req.user.name,
    }
  });
});

export default router;
