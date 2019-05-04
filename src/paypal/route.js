import { Router } from "express";
import actions from "./action";

const paypalRoute = Router();

paypalRoute.get("/paypal", actions.list)
paypalRoute.post("/paypal", actions.create)

export default paypalRoute