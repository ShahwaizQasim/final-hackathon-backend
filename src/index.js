import { app } from "./app.js";
import { ENV } from "./constants.js";
import ConnectDB from "./db/index.js";
import 'dotenv/config'

ConnectDB()
    .then(() => {
        app.listen(ENV.PORT || 3000, () => {
            console.log("Server Running");
        })
    })
    .catch((err) => {
        console.log('err in final', err);
    })