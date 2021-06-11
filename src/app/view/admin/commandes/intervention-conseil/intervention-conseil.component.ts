import { Component, OnInit } from '@angular/core';
import {InterventionService} from '../../../../controller/service/intervention.service';
import {Conseils} from '../../../../controller/model/conseils.model';
import {Intervention} from '../../../../controller/model/intervention.model';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-intervention-conseil',
  templateUrl: './intervention-conseil.component.html',
  styleUrls: ['./intervention-conseil.component.scss'],
  providers: [DatePipe]
})
export class InterventionConseilComponent implements OnInit {

  constructor(private service: InterventionService) {
      this.conseilIntervention.message = null;
      this.conseilInterventions = null;
  }
  cols: any[];
  ngOnInit(): void {
  }

  get conseilIntervention(): Conseils {
    return this.service.conseilIntervention;
  }
  get conseilInterventions(): Array<Conseils> {
    return this.service.conseilInterventions;
  }
  set conseilInterventions(value: Array<Conseils>) {
    this.service.conseilInterventions = value;
  }
  get selectes(): Array<Intervention> {
    return this.service.selectes;
  }
  get iteams(): Conseils {

    return this.service.iteams;
  }

  set iteams(value: Conseils) {
    this.service.iteams = value;
  }
  set selectes(value: Array<Intervention>) {
    this.service.selectes = value;
  }
  ajouter() {
    this.service.saveConseil();
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }
  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  edit(membresEquipe: Conseils) {
    this.conseilIntervention.message = membresEquipe.message;
    this.iteams = membresEquipe;
  }

  delete(membresEquipe: Conseils) {
    this.service.deletes(membresEquipe.collaborateur.codeCollaborateur, membresEquipe.message).subscribe();
    this.conseilInterventions.splice(this.service.findIndexByRefa(membresEquipe.collaborateur.codeCollaborateur, membresEquipe.message)) ;
  }

  editliste(conseilIntervention: Conseils) {
    if (this.service.findIndexByRefa(conseilIntervention.message, conseilIntervention.collaborateur.codeCollaborateur) !== -1 && this.conseilInterventions.length !== 0) {
      alert('donner un membre equipe qui n est pas deja sauvegarder');
    }
    else if (conseilIntervention.message) {
      this.service.saveConseil();
      this.conseilInterventions[this.service.findIndexByRefa(this.iteams.message, this.iteams.collaborateur.codeCollaborateur)].collaborateur.codeCollaborateur = this.iteams.collaborateur.codeCollaborateur;
      this.conseilInterventions[this.service.findIndexByRefa(this.iteams.message, this.iteams.collaborateur.codeCollaborateur)].message= conseilIntervention.message;
    }
  }
}
