import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

@Component({
    selector: 'app-operationstock',
    templateUrl: './operationStock.component.html',
    styleUrls: ['./operationStock-list.component.scss'],
    providers: [MessageService, ConfirmationService]
})
export class OperationStockComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}
