import IMatchOutput from './IMatchOutput';
import TeamModel from '../database/models/team';

interface IServiceLeaderboard {
  getMatchPerformance(): Promise<IMatchOutput[]>;
  getAllTeams(): Promise<TeamModel[]>;
}

export default IServiceLeaderboard;
