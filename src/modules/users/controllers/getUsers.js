import { UserModel } from "../models/index.js";

const GetUser = async (req, res) => {
    try {
        let UserGet = await UserModel.find(req.body);
        res.status(200).send({ status: 200, message: "user fetch successfully", User: UserGet })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default GetUser