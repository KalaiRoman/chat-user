import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import ConnectDb from './middleware/DBConnect.js';
import router from './rounting/Routing.js';
import { errorMiddleware, notFound } from './middleware/errorMiddleware.js';
const app = express();
dotenv.config();
ConnectDb();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))
app.use(cors({ credentials: true, origin: "http://localhost:3000" }))
app.use(express.json());

app.use("/chatuser", router);
app.use(notFound);
app.use(errorMiddleware)
app.listen(process.env.PORT, () => {
    console.log(`Port Running ${process.env.PORT}`)
})