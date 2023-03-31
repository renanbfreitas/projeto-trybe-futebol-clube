import { ModelStatic } from 'sequelize';
import MatchModel from '../database/models/match';
import IServiceMatch from '../interfaces/IServiceMatch';
import IMatchOutput from '../interfaces/IMatchOutput';
import TeamModel from '../database/models/team';

class MatchService implements IServiceMatch {
  protected model: ModelStatic<MatchModel> = MatchModel;

  async readAll(): Promise<IMatchOutput[]> {
    return this.model.findAll({
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }

  async readInProgress(progress: string): Promise<IMatchOutput[]> {
    const matchProgess = progress.includes('true') ? (
      progress.includes('true')) : !progress.includes('false');
    return this.model.findAll({
      where: { inProgress: matchProgess },
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }

  async uploadInProgress(id: number): Promise<string> {
    await this.model.update({ inProgress: false }, { where: { id } });
    return 'Finished';
  }
}

export default MatchService;
