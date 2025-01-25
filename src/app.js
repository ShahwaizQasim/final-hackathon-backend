import express from "express";
import router from "./routes/index.js";
import helmet from "helmet"
import cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world")
})

app.use('/api', router)

export { app }