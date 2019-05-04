import hat from 'hat';
import models from '../model/index';


const Affiliate = models.Affiliate;

const list = async(req, res, next) => {
 const result = await Affiliate.findAll({
   include: [
     {
       model: models.User
     }
   ]
 });
 res.status(200).send(result);
 await next;
};
export default {
    list
}

export default {
  list,
  // get,
  // create,
  // update,
  // del
}
