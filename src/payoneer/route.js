import { Router } from "express";
import actions from "./action";

const payoneerRoute = Router();

payoneerRoute.get("/wire", action.list)
payoneerRoute.post("/wire", actions.create)

export default payoneerRoute