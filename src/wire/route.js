import { Router } from "express";
import actions from "./action";

const wireRoute = Router();

wireRoute.get("/wire", action.list)
wireRoute.post("/wire", actions.create)

export default wireRoute