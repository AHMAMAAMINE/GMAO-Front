import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {InterventionService} from '../../../../controller/service/intervention.service';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {OperationStock} from '../../../../controller/model/operationStock.model';


@Component({
    selector: 'app-operation-stock-view',
    templateUrl: './operationStock-view.component.html',
    styleUrls: ['./operationStock-view.component.scss']
})
export class OperationStockViewComponent implements OnInit {
 //   private viewDialog: boolean;
    createDialog: boolean;
    editDialog: boolean;
    viewDialog: boolean;
    submitted: boolean;
    subscribe: boolean;

    private items: Array<OperationStock>;
    private selected: OperationStock;
    private selectes: Array<OperationStock>;

    constructor(private messageService: MessageService, private service: OperationstockService){
    }

    ngOnInit(): void {
    }

    public hideViewDialog() {
        this.viewDialog = false;
    }

}
