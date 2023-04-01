import { ModelStatic } from 'sequelize';
import IServiceLeaderboard from '../interfaces/IServiceLeaderboard';
import MatchModel from '../database/models/match';
import TeamModel from '../database/models/team';
import IMatchOutput from '../interfaces/IMatchOutput';

class LeaderboardService implements IServiceLeaderboard {
  protected modelMatch: ModelStatic<MatchModel> = MatchModel;
  protected modelTeam: ModelStatic<TeamModel> = TeamModel;

  async getMatchPerformance(): Promise<IMatchOutput[]> {
    return this.modelMatch.findAll({
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }

  async getAllTeams(): Promise<TeamModel[]> {
    return this.modelTeam.findAll();
  }
}

export default LeaderboardService;
