import { UserModel } from "../models/index.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { ENV } from "../../../constants.js";

const LoginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (user) {
            let checkPassword = bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                const token = jwt.sign({ id: user._id, role: user.role, email: user.email }, ENV.JWT_SECURITY_KEY);
                res.status(200).send({ status: 200, message: "user login successfully", data: user, token })
            } else {
                res.status(401).send({ status: 401, message: "password unauthorized", })
            }
        } else {
            res.status(404).send({ status: 404, message: "user not found" })
        }
    } catch (error) {
        res.status(400).send({ status: 400, message: error.message })
    }
}

export default LoginUser