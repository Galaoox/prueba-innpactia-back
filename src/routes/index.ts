import { Router } from "express";
import AuthRoutes from './auth.routes';
import CustomerRoutes from './customer.routes';

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/customer', CustomerRoutes);


export default router;