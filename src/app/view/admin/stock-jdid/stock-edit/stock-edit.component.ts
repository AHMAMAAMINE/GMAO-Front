import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {MagasinService} from '../../../../controller/service/magasin.service';
import {MaterialService} from '../../../../controller/service/material.service';
import {Magasin} from '../../../../controller/model/magasin.model';
import {OperationStock} from '../../../../controller/model/operationStock.model';
import {Material} from '../../../../controller/model/material.model';
import {StockService} from '../../../../controller/service/stock-service.service';
import {Stock} from '../../../../controller/model/Stock.model';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss']
})
export class StockEditComponent implements OnInit {

  constructor(private messageService: MessageService, private service: StockService, private magasinService: MagasinService, private materialService: MaterialService) {


  }
  ngOnInit(): void {
    this.magasinService.findAll();
    this.materialService.findAll();
  }
  get magasins(): Array<Magasin> {
    return this.magasinService.magasins;
  }
  public edit() {
    this.submitted = true;

      console.log("s");
      this.items[this.service.findIndexById(this.selected.magasin.reference,this.selected.material.reference)] = this.selected;
      this.service.edit().subscribe( data => {
        console.log(data)
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Operation Stock is Updated',
          life: 3000
        });
      });

      this.editDialog = false;
      this.selected = new Stock();

  }
  get materials(): Array<Material> {
    return this.materialService.materials;
  }
  public hideEditDialog() {
    this.editDialog = false;
  }
  get selected(): Stock {
    return this.service.selected;
  }

  set selected(value: Stock) {
    this.service.selected = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get items(): Array<Stock> {
    return this.service.items;
  }

  set items(value: Array<Stock>) {
    this.service.items = value;
  }

  isSelected($event: any) {
    this.selected.magasin.reference = $event.target.value;
  }
  isSelect($event: any) {
    this.selected.material.reference = $event.target.value;
  }



}
