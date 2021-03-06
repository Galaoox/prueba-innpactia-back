import { Router } from "express";
import { create, getList, getOne, remove, update } from '../controllers/repair.controller';



const router = Router();


router.get('/',
    getList);

router.post('/',
    create);

router.get('/:id',
    getOne);

router.delete('/:id',
    remove);

router.put('/:id',
    update);


export default router;