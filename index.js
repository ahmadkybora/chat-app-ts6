import express from "express";
import { Server } from "socket.io";
import "dotenv/config";
import "./src/database/connection.js";
import router from "./src/router/index.js";

const PORT = process.env.PORT;
const app = express();
const expressServer = app.listen(PORT, () => console.log(PORT));
const io = new Server(expressServer);

app.use("/", router());