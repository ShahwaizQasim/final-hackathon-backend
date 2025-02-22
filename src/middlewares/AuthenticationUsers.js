import { ENV } from "../constants.js";
import jwt from "jsonwebtoken"
import 'dotenv/config'

const UserAuthenticate = (req, res, next) => {
    try {
        if (req?.headers?.authorization) {
            const token = req?.headers?.authorization.split(" ")[1];
            const decoded = jwt.verify(token, ENV.JWT_SECURITY_KEY);
            console.log("decoded", decoded);
            
            if (decoded) {
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

export default UserAuthenticate;