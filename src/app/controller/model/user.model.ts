import {Collaborateur} from './collaborateur.model';

export class User {
  public  id: number;
  public  collaborateur = new Collaborateur();
  public  login: string;
  public  role: string;
  public  password: string;
}
