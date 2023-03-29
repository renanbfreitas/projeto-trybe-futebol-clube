import User from '../database/models/user';
import ILogin from './ILogin';

interface IServiceLogin {
  readOne(login: ILogin): Promise<User | null>;
}

export default IServiceLogin;