import { ModelStatic } from 'sequelize';
import Team from '../database/models/team';
import IServiceTeam from '../interfaces/IServiceTeam';

class TeamService implements IServiceTeam {
  protected model: ModelStatic<Team> = Team;

  async readAll(): Promise<Team[]> {
    return this.model.findAll();
  }
}

export default TeamService;
