import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {OperationStock} from '../../../../controller/model/operationStock.model';
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


    constructor(private messageService: MessageService, private service: OperationstockService) { }

    ngOnInit(): void {
    }
    public hideCreateDialog() {
        this.createDialog = false;
        this.submitted = false;
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
}
