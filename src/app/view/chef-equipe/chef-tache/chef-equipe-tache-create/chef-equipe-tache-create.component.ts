import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {TacheIntervention} from '../../../../controller/model/tache-intervention.model';
import {EtatTacheService} from '../../../../controller/service/etat-tache.service';
import {EquipesService} from '../../../../controller/service/equipes.service';
import {TacheInterventionService} from '../../../../controller/service/tache-intervention.service';
import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';

@Component({
  selector: 'app-chef-equipe-tache-create',
  templateUrl: './chef-equipe-tache-create.component.html',
  styleUrls: ['./chef-equipe-tache-create.component.scss']
})
export class ChefEquipeTacheCreateComponent implements OnInit {

  constructor(private messageService: MessageService,
              private service: TacheInterventionService,
              private equipesService: EquipesService,
              private etatTacheService: EtatTacheService,
              private collaborateurService: CollaborateurService,
              ) {
  }

  ngOnInit(): void {

  }

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
  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }
  set collaborateur(value: Collaborateur) {
    this.collaborateurService.collaborateur = value;
  }
  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }
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
}
