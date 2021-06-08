import { Component, OnInit } from '@angular/core';
import {DemandeCongeService} from '../../../../controller/service/demande-conge.service';
import {MessageService} from 'primeng/api';
import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {EtatDemandeConge} from '../../../../controller/model/etat-demande-conge.model';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';
import {DemandeConge} from '../../../../controller/model/demande-conge.model';
import {EtatDemandeCongeService} from '../../../../controller/service/etat-demande-conge.service';

@Component({
  selector: 'app-collaborateur-demande-conge-create',
  templateUrl: './collaborateur-demande-conge-create.component.html',
  styleUrls: ['./collaborateur-demande-conge-create.component.scss']
})
export class CollaborateurDemandeCongeCreateComponent implements OnInit {

  constructor(private demandeCongeService: DemandeCongeService,
              private messageService: MessageService,
              private collaborateurService: CollaborateurService,
              private etatDemandeCongeService: EtatDemandeCongeService) { }

  ngOnInit(): void {
    this.collaborateurService.findAll();
    this.etatDemandeCongeService.findAll().subscribe(data => this.itemse = data);
  }


  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }

  public save() {
    this.submitted = true;
    if (this.selected.code.trim()) {
      this.demandeCongeService.save().subscribe(data => {
        this.items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Commande Created',
          life: 3000
        });
      });
      this.createDialog = false;
      this.selected = new DemandeConge();
    }
  }
  get selected(): DemandeConge {
    return this.demandeCongeService.selected;
  }

  set selected(value: DemandeConge) {
    this.demandeCongeService.selected = value;
  }

  get createDialog(): boolean {
    return this.demandeCongeService.createDialog;
  }

  set createDialog(value: boolean) {
    this.demandeCongeService.createDialog = value;
  }

  get submitted(): boolean {
    return this.demandeCongeService.submitted;
  }

  set submitted(value: boolean) {
    this.demandeCongeService.submitted = value;
  }

  get items(): Array<DemandeConge> {
    return this.demandeCongeService.items;
  }

  set items(value: Array<DemandeConge>) {
    this.demandeCongeService.items = value;
  }
  get selectes(): Array<Collaborateur> {
    return this.collaborateurService.selectes;
  }

  set selectes(value: Array<Collaborateur>) {
    this.collaborateurService.selectes = value;
  }

  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }

  set collaborateurs(value: Array<Collaborateur>) {
    this.collaborateurService.collaborateurs = value;
  }
  get itemse(): Array<EtatDemandeConge> {
    return this.etatDemandeCongeService.items;
  }

  set itemse(value: Array<EtatDemandeConge>) {
    this.etatDemandeCongeService.items = value;
  }

}