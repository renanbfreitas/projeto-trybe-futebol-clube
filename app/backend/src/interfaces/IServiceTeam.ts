import Team from '../database/models/team';

interface IServiceTeam {
  readAll(): Promise<Team[]>;
  readById(id: number): Promise<Team | null>;
}

export default IServiceTeam;
