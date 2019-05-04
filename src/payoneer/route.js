import { Router } from "express";
import actions from "./action";

const payoneerRoute = Router();

payoneerRoute.get("/payoneer", actions.list)
payoneerRoute.post("/payoneer", actions.create)

export default payoneerRoute