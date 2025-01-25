

const UserAuthenticate = (req, res, next) => {
    try {
        console.log("Req", req?.headers?.authorization.split(""));
        next();
        
    } catch (error) {
        res.status(200).send({ status: 200, message: "userd", token })

    }
}

export default UserAuthenticate;