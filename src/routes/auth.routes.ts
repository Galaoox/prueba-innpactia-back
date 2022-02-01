import passport from "passport";
import { Router } from "express";
import { login, register, getinfotoken } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/auth.middleware';



const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/getinfotoken', verifyToken, getinfotoken);


export default router;