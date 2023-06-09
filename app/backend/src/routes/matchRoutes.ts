import { Router, Request, Response } from 'express';
import MatchService from '../services/matchService';
import MatchesController from '../controller/matchController';
import validateJWTMiddleware from '../middlewares/validateJWTMiddleware';

const matchRoutes = Router();
const matchRouter = new MatchService();
const matchController = new MatchesController(matchRouter);
matchRoutes.get('/matches', (req: Request, res: Response) => matchController.readAll(req, res));
matchRoutes.patch(
  '/matches/:id/finish',
  validateJWTMiddleware,
  (req: Request, res: Response) => matchController.uploadInProgress(req, res),
);
matchRoutes.patch(
  '/matches/:id',
  validateJWTMiddleware,
  (req: Request, res: Response) => matchController.uploadInProgressData(req, res),
);
matchRoutes.post(
  '/matches',
  validateJWTMiddleware,
  (req: Request, res: Response) => matchController.insertMatch(req, res),
);

export default matchRoutes;
