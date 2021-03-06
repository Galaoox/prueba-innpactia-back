import { Router } from "express";
import { login, getinfotoken } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/auth.middleware';



const router = Router();

router.post('/login', login);
router.get('/getinfotoken', verifyToken, getinfotoken);


export default router;