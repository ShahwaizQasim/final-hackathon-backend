import { ENV } from "../constants.js";
import jwt from "jsonwebtoken"
import 'dotenv/config'
import { UserModel } from "../modules/users/models/index.js";

const VerifyUserAuthentication = async (req, res, next) => {
    try {
        if (req?.headers?.authorization) {
            const token = req?.headers?.authorization.split(" ")[1];
            const decoded = jwt.verify(token, ENV.JWT_SECURITY_KEY);
            if (decoded) {
                const user = await UserModel.findById(decoded._id).lean();
                if (!user) {
                    res.status(404).send({ status: 404, message: "User Not Found" })
                }
                req.user = user;
                next();
            } else {
                res.status(401).send({ status: 401, message: "Unauthorized Token" })
            }
        } else {
            res.status(401).send({ status: 404, message: "Token Not Provided" })
        }
    } catch (error) {
        res.status(401).send({ status: 404, message: error.message })
    }
}

export default VerifyUserAuthentication;