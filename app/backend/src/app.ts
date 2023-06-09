import * as express from 'express';
import teamsRoutes from './routes/teamsRoutes';
import loginRoutes from './routes/LoginRoutes';
import matchRoutes from './routes/matchRoutes';
import leaderboardRoutes from './routes/leaderboardRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.initRouter();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private initRouter():void {
    this.app.use(teamsRoutes);
    this.app.use(loginRoutes);
    this.app.use(matchRoutes);
    this.app.use(leaderboardRoutes);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
