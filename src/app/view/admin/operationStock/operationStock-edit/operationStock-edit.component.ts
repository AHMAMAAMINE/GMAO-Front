import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {OperationStock} from '../../../../controller/model/operationStock.model';
import {MagasinService} from '../../../../controller/service/magasin.service';
import {MaterialService} from '../../../../controller/service/material.service';
import {Magasin} from '../../../../controller/model/magasin.model';
import {Material} from '../../../../controller/model/material.model';


@Component({
    selector: 'app-operationstock-edit',
    templateUrl: './operationStock-edit.component.html',
    styleUrls: ['./operationStock-edit.component.scss']
})
export class OperationStockEditComponent implements OnInit {

    createDialog: boolean;
    viewDialog: boolean;
    subscribe: boolean;
    private value: string;
    private values: string;
    valuer: any;


    constructor(private messageService: MessageService, private service: OperationstockService, private magasinService: MagasinService, private materialService: MaterialService) {


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

            if (this.selected.id) {
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
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
            this.selected = new OperationStock();
        }
    }
    get materials(): Array<Material> {
        return this.materialService.materials;
    }
    public hideEditDialog() {
        this.editDialog = false;
    }
    get selected(): OperationStock {
        return this.service.selected;
    }

    set selected(value: OperationStock) {
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
