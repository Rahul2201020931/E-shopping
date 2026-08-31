import express from 'express';
import {loginUser, googleLogin, registerUser, adminLogin} from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/google', googleLogin);
router.post('/register', registerUser);
router.post('/admin/login', adminLogin);

export default router;
