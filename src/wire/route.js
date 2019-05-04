import { Router } from "express";
import actions from "./action";

const wireRoute = Router();

wireRoute.get("/wire", actions.list)
wireRoute.post("/wire", actions.create)

export default wireRoute