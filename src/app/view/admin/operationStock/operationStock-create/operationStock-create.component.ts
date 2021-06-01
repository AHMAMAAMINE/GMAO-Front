import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {OperationStock} from '../../../../controller/model/operationStock.model';
import {MagasinService} from '../../../../controller/service/magasin.service';
import {Magasin} from '../../../../controller/model/magasin.model';
import {MaterialService} from '../../../../controller/service/material.service';
import {Material} from '../../../../controller/model/material.model';
// import {Intervention} from "../../../../controller/model/intervention.model";


@Component({
    selector: 'app-operation-stock-create',
    templateUrl: './operationStock-create.component.html',
    styleUrls: ['./operationStock-create.component.scss']
})
export class OperationStockCreateComponent implements OnInit {

 //   private items: Array<OperationStock>;
  //  private selected: OperationStock;
    private selectes: Array<OperationStock>;
    stock: any;


    constructor(private messageService: MessageService, private service: OperationstockService, private magasinService: MagasinService, private materialService: MaterialService) { }

    ngOnInit(): void {
        this.magasinService.findAll();
        this.materialService.findAll();
    }

    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
    }
    get magasins(): Array<Magasin> {
        return this.magasinService.magasins;
    }
    public save() {
        this.submitted = true;
        if (this.selected.magasinSource.trim()) {
            this.service.save().subscribe(data => {
                this.items.push({...data});
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Operation Stock Created',
                    life: 3000
                });
            });
            this.createDialog = false;
            this.selected = new OperationStock();
        }

    }
    get materials(): Array<Material> {
        return this.materialService.materials;
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

    isSelected($event: any) {
        this.selected.magasinSource.reference = $event.target.value;
    }
    isSelect($event: any) {
        this.selected.magasinDestination.reference = $event.target.value;
    }

    isSelects($event: any) {
        this.selected.material.reference = $event.target.value;

    }
}
