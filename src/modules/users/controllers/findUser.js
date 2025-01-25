import { UserModel } from "../models/index.js";

const FindUser = async (req, res) => {
    try {
        let user = await UserModel.findOne({
            _id: req._id
        });
        res.status(200).send({ status: 200, message: "user fetch successfully", user: user })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default FindUser