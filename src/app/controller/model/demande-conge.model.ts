import {EtatDemandeConge} from './etat-demande-conge.model';

export class DemandeConge {
  public id: number;
  public code: string;
  public  dateDepart: string;
  public  dateFin: string;
  public  codeCollaborateur: string;
  public  etatDemandeConge: EtatDemandeConge;
  public messageCollaborateur: string;
  public action: string;
}

