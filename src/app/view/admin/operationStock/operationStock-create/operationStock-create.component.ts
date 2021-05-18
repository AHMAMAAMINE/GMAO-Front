import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";
import {OperationstockService} from "../../../../controller/service/operationstock.service";
import {OperationStock} from "../../../../controller/model/operationStock.model";


@Component({
    selector: 'app-operationstock-create',
    templateUrl: './operationStock-create.component.html',
    styleUrls: ['./operationStock-create.component.scss']
})
export class operationStockCreateComponent implements OnInit {
    createDialog: boolean;
    editDialog: boolean;
    viewDialog: boolean;
    submitted: boolean;
    subscribe: boolean;

    private items: Array<OperationStock>;
    private selected: OperationStock;
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
}
