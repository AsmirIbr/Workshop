import { Router } from 'express';
import actions from './action';

const affiliateRouter = Router();

affiliateRouter.get('/affiliate', actions.list);
// productsRouter.get('/affiliate/', actions.get);
// productsRouter.post('/affiliate', actions.create);
// productsRouter.put('/affiliate/', actions.update);
// productsRouter.delete('/affiliate/', actions.del);

export default affiliateRouter;