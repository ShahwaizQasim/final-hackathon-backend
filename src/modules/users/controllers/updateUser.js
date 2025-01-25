import { UserModel } from "../models/index.js";

const UpdateUser = async (req, res) => {
    try {
        const { id } = req.params;
        let UserUpdate = await UserModel.findByIdAndUpdate(id, req.body);
        res.status(200).send({ status: 200, message: "user updated successfully" })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default UpdateUser;