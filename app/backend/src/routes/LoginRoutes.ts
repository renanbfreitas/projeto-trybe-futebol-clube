import { Router, Request, Response } from 'express';
import LoginService from '../services/LoginService';
import LoginController from '../controller/LoginController';
import loginAuthMiddleware from '../middlewares/loginAuthMiddleware';
import validateJWTMiddleware from '../middlewares/validateJWTMiddleware';

const loginRoutes = Router();
const loginRouter = new LoginService();
const loginController = new LoginController(loginRouter);
loginRoutes.post(
  '/login',
  loginAuthMiddleware,
  (req: Request, res: Response) => loginController.readOne(req, res),
);
loginRoutes.get(
  '/login/role',
  validateJWTMiddleware,
  (req: Request, res: Response) => loginController.getRole(req, res),
);

export default loginRoutes;
