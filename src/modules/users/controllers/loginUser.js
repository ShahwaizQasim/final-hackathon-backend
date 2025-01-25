import { UserModel } from "../models/index.js";
import bcrypt from "bcrypt"

const LoginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.findOne({ email });
        if (user) {
            let checkPassword = bcrypt.compareSync(password, user.password);
            if (checkPassword) {
                res.status(200).send({ status: 200, message: "user login successfully", })
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