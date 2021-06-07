import { Component, OnInit } from '@angular/core';
import {DemandeCongeService} from '../../../../controller/service/demande-conge.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DemandeCongeVo} from '../../../../controller/model/demande-conge-vo.model';
import {DemandeConge} from '../../../../controller/model/demande-conge.model';
import {Collaborateur} from '../../../../controller/model/collaborateur.model';
import {CollaborateurService} from '../../../../controller/service/collaborateur.service';
import {Entreprise} from '../../../../controller/model/entreprise.model';

@Component({
  selector: 'app-collaborateur-demande-conge-list',
  templateUrl: './collaborateur-demande-conge-list.component.html',
  styleUrls: ['./collaborateur-demande-conge-list.component.scss']
})
export class CollaborateurDemandeCongeListComponent implements OnInit {
   cols: any[];
  constructor(private  demandeCongeService: DemandeCongeService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private  collaborateurService: CollaborateurService) { }

  ngOnInit(): void {
    this.initCol();
    //this.findItems(this.selectedC);
  }
/*
  findItems(selected: Collaborateur) {
    this.demandeCongeService.findDemandeCongeOfCollaborateur(selected.code).subscribe(
        data => {
          this.items = data;
        }
    );
  }*/

  public openCreate() {
    this.selected = new DemandeConge();
    this.submitted = false;
    this.createDialog = true;
  }
  public view(demandeConge: DemandeConge) {
    this.selected = {...demandeConge};
    this.viewDialog = true;
  }

  public delete(selected: DemandeConge) {
    this.selected = selected;
    this.confirmationService.confirm({
      message: 'are you sure to delete ' + selected.code + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.demandeCongeService.deleteByCode().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new DemandeConge();
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
        this.demandeCongeService.deleteMultipleByCode().subscribe(data => {
          this.demandeCongeService.deleteMultipleIndexById();
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
  public  findByCriteria(){
    console.log('http://localhost:8036/maneo-rh/conge/findByCriteriaConge');
    this.demandeCongeService.findByCriteria().subscribe(
        data => {
          console.log(data);
          this.items = data;
        }
    );
  }

  private initCol() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'code', header: 'Code'},
      {field: 'collaborateur', header: 'collaborateur'},
      {field: 'dateDepart', header: 'Date départ'},
      {field: 'dateFin', header: 'Date fin'},
      {field: 'etatDemandeConfeLibelle', header: 'Etat Demande'},
      {field: 'MsgCollaborateur', header: 'Msg Collaborateur'},
      {field: 'Validateur', header: 'Commentaire Validateur'},
    ];
  }

  get selected(): DemandeConge {
    return this.demandeCongeService.selected;
  }

  set selected(value: DemandeConge) {
    this.demandeCongeService.selected = value;
  }


  get items(): Array<DemandeConge> {
    return this.demandeCongeService.items;
  }

  set items(value: Array<DemandeConge>) {
    this.demandeCongeService.items = value;
  }

  get submitted(): boolean {
    return this.demandeCongeService.submitted;
  }

  set submitted(value: boolean) {
    this.demandeCongeService.submitted = value;
  }

  get createDialog(): boolean {
    return this.demandeCongeService.createDialog;
  }

  set createDialog(value: boolean) {
    this.demandeCongeService.createDialog = value;
  }

  get editDialog(): boolean {
    return this.demandeCongeService.editDialog;
  }

  set editDialog(value: boolean) {
    this.demandeCongeService.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.demandeCongeService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.demandeCongeService.viewDialog = value;
  }

  get selectes(): Array<DemandeConge> {
    return this.demandeCongeService.selectes;
  }

  set selectes(value: Array<DemandeConge>) {
    this.demandeCongeService.selectes = value;
  }
  get demandeCongeVo(): DemandeCongeVo{
    return  this.demandeCongeService.demandeCongeVo;
  }
  set demandeCongeVo(value: DemandeCongeVo){
    this.demandeCongeService.demandeCongeVo;
  }

  get selectedC(): Collaborateur {
    return this.collaborateurService.selected;
  }
}
