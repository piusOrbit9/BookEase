import {Router} from 'express';
import resourceRoutes from './bookease.js';
const router=Router();
router.use('/bookings',resourceRoutes);
export default router;
