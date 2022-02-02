import { Router } from "express";
import { create, getList, remove } from '../controllers/user.controller';



const router = Router();


router.get('/',
    getList);

router.post('/',
    create);

router.delete('/:id',
    remove);

export default router;