import { Component, OnInit } from '@angular/core';
import {DemandeCongeService} from '../../../controller/service/demande-conge.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CollaborateurService} from '../../../controller/service/collaborateur.service';
import {DemandeConge} from '../../../controller/model/demande-conge.model';
import {Collaborateur} from '../../../controller/model/collaborateur.model';

@Component({
  selector: 'app-collaborateur-list',
  templateUrl: './collaborateur-list.component.html',
  providers: [MessageService , ConfirmationService],

  styleUrls: ['./collaborateur-list.component.scss']
})
export class CollaborateurListComponent implements OnInit {
  cols: any[];

  constructor(private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private collaborateurService: CollaborateurService) {
  }

  ngOnInit(): void {
    this.initCol();
  }

  public openCreate() {
    this.collaborateur = new Collaborateur();
    this.submitted = false;
    this.createDialog = true;
  }

  public view(coll: Collaborateur) {
    this.collaborateur = {...this.collaborateur};
    this.viewDialog = true;
  }

  public delete(selected: DemandeConge) {
    this.collaborateur = this.collaborateur;
    this.confirmationService.confirm({
      message: 'are you sure to delete ' + selected.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.collaborateurService.deleteByCodeCollaborateur().subscribe(data => {
          this.collaborateurs = this.collaborateurs.filter(val => val.id !== this.collaborateur.id);
          this.collaborateur = new Collaborateur();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Holiday request deleted',
            life: 3000
          });
        });
      }
    });
  }

  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure to delete these leave requests?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.collaborateurService.deleteMultipleByCodeCollaborateur().subscribe(data => {
          this.selectes = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'leave requests deleted',
            life: 3000
          });
        });
      }
    });
  }


  private initCol() {
    this.cols = [
      {field: 'fullname', header: 'nom et prenom'},
    ];
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

  get collaborateur(): Collaborateur {
    return this.collaborateurService.collaborateur;
  }

  set collaborateur(value: Collaborateur) {
    this.collaborateurService.collaborateur = value;
  }


  get submitted(): boolean {
    return this.collaborateurService.submitted;
  }

  set submitted(value: boolean) {
    this.collaborateurService.submitted = value;
  }

  get createDialog(): boolean {
    return this.collaborateurService.createDialog;
  }

  set createDialog(value: boolean) {
    this.collaborateurService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.collaborateurService.editDialog;
  }

  set editDialog(value: boolean) {
    this.collaborateurService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.collaborateurService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.collaborateurService.viewDialog = value;
  }


}
