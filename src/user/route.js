import { Router } from 'express';
import actions from './action';

const userRoute = Router();

userRoute.post('/signup', actions.create);
userRoute.get('/users', actions.getUsers);
userRoute.put('/users/:id', actions.update);

export default userRoute;