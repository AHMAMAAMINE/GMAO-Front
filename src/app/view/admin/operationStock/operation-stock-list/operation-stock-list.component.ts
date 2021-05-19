import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {OperationStock} from '../../../../controller/model/operationStock.model';

@Component({
  selector: 'app-operation-stock-list',
  templateUrl: './operation-stock-list.component.html',
  styleUrls: ['./operation-stock-list.component.scss']
})
export class OperationStockListComponent implements OnInit {

  cols: any[];

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService, private service: OperationstockService) {
  }

  ngOnInit(): void {
    this.initCol();
    this.service.findAll().subscribe(data => this.items = data);
  }

  public deleteMultiple() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected commandes?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteMultipleByReference().subscribe(data => {
          this.service.deleteMultipleIndexById();
          this.selecteds = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Commandes Deleted',
            life: 3000
          });
        });
      }
    });
  }
  public openCreate() {
    this.selected = new OperationStock();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(commande: OperationStock) {
    this.selected = {...commande};
    this.editDialog = true;
  }
  public view(commande: OperationStock) {
    this.selected = {...commande};
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      {field: 'magasinSource', header: 'magasin Source'},
      {field: 'magasinDestination', header: 'magasin Destination'},
      {field: 'material', header: 'material'},
      {field: 'quantite', header: 'quantite'}
    ];
  }

  get selected(): OperationStock {
    return this.service.selected;
  }

  set selected(value: OperationStock) {
    this.service.selected = value;
  }

  get items(): Array<OperationStock> {
    return this.service.items;
  }

  set items(value: Array<OperationStock>) {
    this.service.items = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  get selecteds(): Array<OperationStock> {
    return this.service.selecteds;
  }

  set selecteds(value: Array<OperationStock>) {
    this.service.selecteds = value;
  }


  delete(operationStock: any) {
    
  }
}
