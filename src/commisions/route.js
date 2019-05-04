import { Router } from 'express';
import actions from './action';

const commisionsRouter = Router();

commisionsRouter.get('/commisions', actions.list);
// productsRouter.get('/affiliate/', actions.get);
// productsRouter.post('/affiliate', actions.create);
// productsRouter.put('/affiliate/', actions.update);
// productsRouter.delete('/affiliate/', actions.del);

export default commisionsRouter;