import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {InterventionService} from '../../../../controller/service/intervention.service';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {OperationStock} from '../../../../controller/model/operationStock.model';
import {Equipe} from '../../../../controller/model/equipe.model';


@Component({
    selector: 'app-operation-stock-view',
    templateUrl: './operationStock-view.component.html',
    styleUrls: ['./operationStock-view.component.scss']
})
export class OperationStockViewComponent implements OnInit {
 //   private viewDialog: boolean;
    createDialog: boolean;
    editDialog: boolean;
    submitted: boolean;
    subscribe: boolean;



    constructor(private messageService: MessageService, private service: OperationstockService){
    }

    ngOnInit(): void {
    }


    public hideViewDialog() {
        this.viewDialog = false;
    }

    get selected(): OperationStock {
        return this.service.selected;
    }

    set selected(value: OperationStock) {
        this.service.selected = value;
    }

    get viewDialog(): boolean {
        return this.service.viewDialog;
    }

    set viewDialog(value: boolean) {
        this.service.viewDialog = value;
    }

}
