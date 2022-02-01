import { Router } from "express";
import AuthRoutes from './auth.routes';
import CustomerRoutes from './customer.routes';
import PhoneRoutes from './phone.routes';

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/customer', CustomerRoutes);
router.use('/phone', PhoneRoutes);



export default router;