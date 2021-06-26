import { Component, OnInit } from '@angular/core';
import {StockService} from '../../../../controller/service/stock-service.service';
import {MaterialService} from '../../../../controller/service/material.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {Stock} from '../../../../controller/model/Stock.model';
import {Material} from '../../../../controller/model/material.model';
import {Intervention} from '../../../../controller/model/intervention.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers : [MessageService, ConfirmationService  ],
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
      private service: StockService,
      private materialService: MaterialService,
      private messageService: MessageService,private confirmationService: ConfirmationService
  ) {}

  cols: any[];

  public openCreate() {
    this.selected = new Stock();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(stock: Stock) {
    // this.service
    //   .findByCode(commande.code)
    //   .subscribe((data) => (this.selected = data));
    // console.log(this.selected);
    this.editDialog = true;
    this.selected.material.reference = stock.material.reference;
    this.selected.magasin.reference = stock.magasin.reference;
  }
  public view(stock: Stock) {
    this.selected.material.reference = stock.material.reference;
    this.selected.magasin.reference = stock.magasin.reference;
    this.selected.qte=stock.qte;
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      { field: "id", header: "Id" },
      { field: "magasin", header: "Magasin" },
      { field: "material", header: "Material" },
      { field: "quantite", header: "Quantite" },
    ];
  }

  get materials(): Array<Material> {
    return this.materialService.materials;
  }
  get selected(): Stock {
    return this.service.selected;
  }

  set selected(value: Stock) {
    this.service.selected = value;
  }

  get items(): Array<Stock> {
    return this.service.items;
  }

  set items(value: Array<Stock>) {
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

  get selectes(): Array<Stock> {
    return this.service.selectes;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(
        (data) => {
          this.items = data;
        },
        (error) => {
          console.log(error);
        }
    );
  }


  delete(stock: Stock) {
    this.selected = stock;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + stock.magasin.reference + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.deleteByMagasinRefAndMatRef().subscribe(data => {
          this.items = this.items.filter(val => val.id !== this.selected.id);
          this.selected = new Stock();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Commande Deleted',
            life: 3000
          });
        });
      }
    });
  }
}
