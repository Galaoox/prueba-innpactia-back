import passport from "passport";
import { Router } from "express";
import { create, getList, getOne, remove, update } from '../controllers/phone.controller';



const router = Router();


router.get('/',
    // passport.authenticate('jwt', { session: false }),
    getList);

router.post('/',
    // passport.authenticate('jwt', { session: false }),
    create);

router.get('/:id',
    // passport.authenticate('jwt', { session: false }),
    getOne);

router.delete('/:id',
    // passport.authenticate('jwt', { session: false }),
    remove);

router.put('/:id',
    // passport.authenticate('jwt', { session: false }),
    update);


export default router;