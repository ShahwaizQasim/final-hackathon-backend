import { UserModel } from "../models/index.js";

const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        let UserDelete = await UserModel.findByIdAndDelete(id);
        res.status(200).send({ status: 200, message: "user deleted successfully" })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default DeleteUser;