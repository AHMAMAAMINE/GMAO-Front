import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {TacheIntervention} from '../../../../controller/model/tache-intervention.model';
import {EtatTacheService} from '../../../../controller/service/etat-tache.service';
import {EquipesService} from '../../../../controller/service/equipes.service';
import {TacheInterventionService} from '../../../../controller/service/tache-intervention.service';
import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';
import {InterventionService} from '../../../../controller/service/intervention.service';
import {ChefEquipe} from '../../../../controller/model/chef-equipe.model';
import {ChefEquipeService} from '../../../../controller/service/chef-equipe.service';
import {MembreEquipe} from '../../../../controller/model/membre-equipe.model';
import {Intervention} from '../../../../controller/model/intervention.model';

@Component({
  selector: 'app-chef-equipe-tache-create',
  templateUrl: './chef-equipe-tache-create.component.html',
  styleUrls: ['./chef-equipe-tache-create.component.scss']
})
export class ChefEquipeTacheCreateComponent implements OnInit {

  constructor(private messageService: MessageService,
              private service: TacheInterventionService,
              private interventionService: InterventionService,
              private etatTacheService: EtatTacheService,
              private equipeService: EquipesService,
              private chefEquipeService: ChefEquipeService,
              ) {
  }

  ngOnInit(): void {
    this.interventionService.findByCodeChef(this.chef.code).subscribe(data => this.intervention = data.intervention);
    this.equipeService.findByCodeCollaborateur(this.chef.code).subscribe(data => this.membres = data.membres);
  }
  get chef(): ChefEquipe {
    return this.chefEquipeService.selected;
  }
  get membres(): Array<MembreEquipe> {
    return this.equipeService.membres;
  }
  get intervention(): Intervention {
    return this.interventionService.selected;
  }
  set membres(value: Array<MembreEquipe>){
    this.membres = value;
  }
  set intervention(value: Intervention){
    this.intervention = value;
  }

  // set chef(value: ChefEquipe) {
  //   this._selected = value;
  // }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      this.service.save().subscribe(data => {
        this.items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Tache Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new TacheIntervention();
    }
  }
  // get collaborateur(): Collaborateur {
  //   return this.collaborateurService.collaborateur;
  // }
  // set collaborateur(value: Collaborateur) {
  //   this.collaborateurService.collaborateur = value;
  // }
  // get collaborateurs(): Array<Collaborateur> {
  //   return this.collaborateurService.collaborateurs;
  // }

  get selected(): TacheIntervention {
    return this.service.selected;
  }
  set selected(value: TacheIntervention) {
    this.selected = value;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get items(): Array<TacheIntervention> {
    return this.service.items;
  }

  isSelected($event: any) {
    this.selected.membreEquipe.collaborateur.codeCollaborateur = $event.target.value;
  }
  isSelect($event: any){
    this.selected.intervention.code = $event.target.value;
  }
}
