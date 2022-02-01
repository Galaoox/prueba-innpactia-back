import { Router } from "express";
import AuthRoutes from './auth.routes';
import CustomerRoutes from './customer.routes';
import PhoneRoutes from './phone.routes';
import RepairRoutes from './repair.routes';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();

router.use('/auth', AuthRoutes);
router.use('/customer', verifyToken, CustomerRoutes);
router.use('/phone', verifyToken, PhoneRoutes);
router.use('/repair', verifyToken, RepairRoutes);




export default router;