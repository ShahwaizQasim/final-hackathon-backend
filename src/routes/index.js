import { Router } from "express";
import userRouter from "../modules/users/index.js";


const router = Router();

router.use('/users/auth', userRouter);

export default router;