import { Router } from "express";
import { authRouter } from "./authRouter.js";

const router = Router();

export default () => {
    authRouter.register(router);
    return router;
}
