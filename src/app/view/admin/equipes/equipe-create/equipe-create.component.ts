import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Equipe } from 'src/app/controller/model/equipe.model';
import { EquipesService } from 'src/app/controller/service/equipes.service';
import { MembreEquipe } from '../../../../controller/model/membre-equipe.model';

import { Collaborateur } from '../../../../controller/model/collaborateur.model';
import { CollaborateurService } from '../../../../controller/service/collaborateur.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-equipe-create',
  templateUrl: './equipe-create.component.html',
  styleUrls: ['./equipe-create.component.scss'],
  providers: [DatePipe]
})
export class EquipeCreateComponent implements OnInit {
  myDate = new Date();
  date: string;
  valeur: string;
  added = false;
  private values: string;
  constructor(
    private messageService: MessageService,
    private service: EquipesService,
    private collaborateurService: CollaborateurService,
    private datePipe: DatePipe
  ) {
    this.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.collaborateurService.findAll().subscribe(data => this.collaborateurService.collaborateurs = data);
  }
  public hideCreateDialog() {
    this.createDialog = false;
    this.submitted = false;
  }
  public saveMembre() {
    this.valeur = this.selectedEquipe.ref;
    this.values = this.selectedEquipe.libelle;
    this.membres.push(this.membreEquipe);
    this.membreEquipe = null;
    console.log(this.membres)
    // this.service.selectesEquipe.push(this.selectedEquipe);
    this.added = true;
  }

  public save() {
    this.submitted = true;
    if (this.selectedEquipe.ref.trim()) {
      this.service.save().subscribe((data) => {
        // this.equipes.push({ ...data });
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Equipe Created',
          life: 3000,
        });
      });
      this.createDialog = false;
      this.selectedEquipe = new Equipe();
    }
  }
  get selectedEquipe(): Equipe {
    return this.service.selectedEquipe;
  }

  set selectedEquipe(value: Equipe) {
    this.service.selectedEquipe = value;
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

  get equipes(): Array<Equipe> {
    return this.service.equipes;
  }

  set equipes(value: Array<Equipe>) {
    this.service.equipes = value;
  }
  get collaborateurs(): Array<Collaborateur> {
    return this.collaborateurService.collaborateurs;
  }
  get membreEquipe(): MembreEquipe {
    return this.service.membre;
  }
  set membreEquipe(value: MembreEquipe) {
    this.service.membre = value;
  }
  isSelected($event: any) {
    this.membreEquipe.collaborateur.codeCollaborateur = $event.target.value ;
  }
  get membres(): Array<MembreEquipe> {

    return this.service.membres;
  }

  set membres(value: Array<MembreEquipe>) {
    this.service.membres = value;
  }
    // isSelecte($event: any) {
    //     this.selectedEquipe.chefEquipe.collaborateur.codeCollaborateur = $event.target.value;
    // }
  Selected($event: any) {
    console.log("ss")
    console.log(this.membreEquipe.collaborateur.codeCollaborateur)
    console.log($event.target.value)

  }
  checkCheckBoxvalue(event){
    console.log(event.checked)
  }
}
