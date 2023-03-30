import { Model, INTEGER, BOOLEAN } from 'sequelize';
import TeamModel from './team';
import db from '.';

class MatchModel extends Model {
  declare readonly id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}
MatchModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  homeTeamId: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
    field: 'home_team_goals',
  },
  awayTeamId: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
    field: 'away_team_id',
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
    field: 'away_team_goals',
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
    field: 'in_progress',
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'matches',
});

MatchModel.belongsTo(TeamModel, { foreignKey: 'home_team_id', as: 'homeTeam' });
TeamModel.hasMany(MatchModel, { foreignKey: 'home_team_id', as: 'homeTeam' });

MatchModel.belongsTo(TeamModel, { foreignKey: 'away_team_id', as: 'awayTeam' });
TeamModel.hasMany(MatchModel, { foreignKey: 'away_team_id', as: 'awayTeam' });

export default MatchModel;
