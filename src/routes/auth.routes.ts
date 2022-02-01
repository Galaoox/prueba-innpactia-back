import passport from "passport";
import { Router } from "express";
import { login, register, getinfotoken } from '../controllers/auth.controller';



const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/getinfotoken',
    passport.authenticate('jwt', { session: false }),
    getinfotoken);


export default router;