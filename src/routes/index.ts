import { Router } from "express";
import AuthRoutes from './auth.routes';
import CustomerRoutes from './customer.routes';
import PhoneRoutes from './phone.routes';
import RepairRoutes from './repair.routes';

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/customer', CustomerRoutes);
router.use('/phone', PhoneRoutes);
router.use('/repair', RepairRoutes);




export default router;