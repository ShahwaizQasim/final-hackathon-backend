import { Router } from "express";
import AddUser from "./controllers/addUser.js";
import GetUser from "./controllers/getUsers.js";
import UpdateUser from "./controllers/updateUser.js";
import DeleteUser from "./controllers/deleteUser.js";
import LoginUser from "./controllers/loginUser.js";

const userRouter = Router();

userRouter.get('/', GetUser);
userRouter.post('/login', LoginUser)
userRouter.post('/', AddUser)
userRouter.put('/:id', UpdateUser)
userRouter.delete('/:id', DeleteUser)

export default userRouter;