import hat from "hat";
import models from "../model/index";
import Sequelize from "sequelize";

const Paypal = models.paypal

const list = async (req, res, next) => {
    const result = await Paypal.findAll()
}

const create = async (req, res, next) => {
    const {
        PayPal,
        email,
        userId
    }: {
        PayPal: string,
        email: string,
        userId: string
    } = req.body;

    const paypalId = hat();
    await Wire.create({
        id: paypalId,
        PayPal,
        email,
        userId
    });
    res.status(201).send({ info: 'Payment has been created' });

    await next;
}

export default{
    list,
    create
}