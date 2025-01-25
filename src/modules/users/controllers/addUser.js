import { UserModel } from "../models/index.js";

const AddUser = async (req, res) => {
    try {
        let addUserDB = await UserModel(req.body);
        addUserDB = await addUserDB.save();
        console.log("UserAdd", addUserDB);
        res.status(200).send({ status: 200, message: "user added successfully", User: addUserDB })
    } catch (error) {
        res.status(400).send({ status: 400, message: error })
    }
}

export default AddUser