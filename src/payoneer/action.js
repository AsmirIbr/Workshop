import hat from "hat";
import models from "../model/index";
import Sequelize from "sequelize";

const Payoneer = models.payoneer

const list = async (req, res, next) => {
    const result = await Payoneer.findAll()

    res.status(200).send(result)
}

const create = async (req, res, next) => {
    const {
        email,
        userId
    }: {
        email: string,
        userId: string
    } = req.body;

    const payoneerId = hat();
    await Wire.create({
        id: payoneerId,
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