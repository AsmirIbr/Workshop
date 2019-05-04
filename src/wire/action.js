import hat from "hat";
import models from "../model/index";
import Sequelize from "sequelize";

const Wire = models.wire

const list = async (req, res, next) => {
    const result = await Wire.findAll()
}

const create = async (req, res, next) => {
    const {
        IBAN,
        Swift,
        accountNumber,
        bankAddress,
        accountHolderName,
        Country,
        ZipCode,
        userId
    }: {
        IBAN: string,
        Swift: string,
        accountNumber: string,
        bankAddress: string,
        accountHolderName: string,
        Country: string,
        ZipCode: string,
        userId: string
    } = req.body;

    const wireId = hat();
    await Wire.create({
        id: wireId,
        IBAN,
        Swift,
        accountNumber,
        bankAddress,
        accountHolderName,
        Country,
        ZipCode,
        userId
    });
    res.status(201).send({ info: 'Payment has been created' });

    await next;
}

export default{
    list,
    create
}