import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {OperationStock} from '../../../../controller/model/operationStock.model';


@Component({
    selector: 'app-operationstock-edit',
    templateUrl: './operationStock-edit.component.html',
    styleUrls: ['./operationStock-edit.component.scss']
})
export class OperationStockEditComponent implements OnInit {

    createDialog: boolean;
    viewDialog: boolean;
    subscribe: boolean;


    constructor(private messageService: MessageService, private service: OperationstockService) { }
    ngOnInit(): void {
    }
    public edit() {
        this.submitted = true;
        if (this.selected.magasinSource.trim()){
            if (this.selected.id) {
                this.items[this.service.findIndexById(this.selected.id)] = this.selected;
                this.service.edit().subscribe( data => {
                    this.selected = data;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Operation Stock is Updated',
                        life: 3000
                    });
                });
            }
            this.editDialog = false;
            this.selected = new OperationStock();
        }
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



}
