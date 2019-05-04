import hat from 'hat';
import models from '../model/index';


const Commsions = models.Commisions;

const list = async(req, res, next) => {
 const result = await Commsions.findAll();
 res.status(200).send(result);
 await next;
};

export default {
    list
}
