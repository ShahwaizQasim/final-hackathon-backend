import { Router } from "express";
import AddUser from "./controllers/addUser.js";
import GetUser from "./controllers/getUsers.js";
import UpdateUser from "./controllers/updateUser.js";
import DeleteUser from "./controllers/deleteUser.js";
import LoginUser from "./controllers/loginUser.js";
import UserAuthenticate from "../../middlewares/AuthenticationUsers.js";
import FindUser from "./controllers/findUser.js";
import VerifyUserAuthentication from "../../middlewares/VerifyUserAuthenticate.js";

const userRouter = Router();

userRouter.get('/', UserAuthenticate, GetUser);
userRouter.post('/login', LoginUser)
userRouter.post('/UserInfo', VerifyUserAuthentication, FindUser)
userRouter.post('/', AddUser)
userRouter.put('/:id', UpdateUser)
userRouter.delete('/:id', DeleteUser)

export default userRouter;