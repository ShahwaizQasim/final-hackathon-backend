import express from "express";
import router from "./routes/index.js";
import helmet from "helmet"

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Route not found!' });
});

app.use('/api', router)

export { app }