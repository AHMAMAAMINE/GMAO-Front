import {EtatTache} from './etat-tache.model';
import {Intervention} from './intervention.model';
import {MembreEquipe} from './membre-equipe.model';

export class TacheIntervention {
    public  id: number;
    public  code: string;
    public  description: string;
    public dateDebut: string;
    public dateFin: string;
    public etatTache: boolean;
    public intervention: Intervention;
    public membreEquipe = MembreEquipe;
}
