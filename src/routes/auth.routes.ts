const { login, register, getinfotoken } = require('../controllers/auth.controller');
import passport from "passport";
import { Router } from "express";



const router = Router();

// crear usuario
router.post('/login', login);
// iniciar sesion
router.post('/register', register);

router.get('/getinfotoken',
    passport.authenticate('jwt', { session: false }),
    getinfotoken);


export default router;