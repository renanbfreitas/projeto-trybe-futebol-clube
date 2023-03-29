import Team from '../database/models/team';

interface IServiceTeam {
  readAll(): Promise<Team[]>;
}

export default IServiceTeam;
