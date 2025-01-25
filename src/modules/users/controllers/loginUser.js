import { UserModel } from "../models/index.js";

const LoginUser = async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.find(email);
        if (!user) {
            res.status(404).send({ status: 404, message: "user not found", })
        }
        res.status(200).send({ status: 200, message: "user added successfully" })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default LoginUser