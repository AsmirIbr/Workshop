import { Router } from 'express';

import affiliate from '../affiliate/index';
import commisions from '../commisions/index';
import user from '../user/index';
import payoneer from '../payoneer/index';
import paypal from '../paypal/index';
import wire from '../wire/index';

const indexRouter = Router();

indexRouter.use(affiliate.route);
// indexRouter.use(commisions.route);
indexRouter.use(user.route);
indexRouter.use(payoneer.route);
indexRouter.use(paypal.route);
indexRouter.use(wire.route);

export default indexRouter;