import { Router, Request, Response } from 'express';
import LoginService from '../services/LoginService';
import LoginController from '../controller/LoginController';
import loginAuthMiddleware from '../middlewares/loginAuthMiddleware';

const matchesRoutes = Router();
const loginRouter = new LoginService();
const loginController = new LoginController(loginRouter);
matchesRoutes.post(
  '/login',
  loginAuthMiddleware,
  (req: Request, res: Response) => loginController.readOne(req, res),
);

export default matchesRoutes;
