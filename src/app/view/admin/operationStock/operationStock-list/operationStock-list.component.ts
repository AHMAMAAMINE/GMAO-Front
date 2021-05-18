import {Component, OnInit} from "@angular/core";
import {ConfirmationService, MessageService} from "primeng/api";
import {OperationstockService} from "../../../../controller/service/operationstock.service";
import {OperationStock} from "../../../../controller/model/operationStock.model";
import {Equipe} from "../../../../controller/model/equipe.model";



@Component({
    selector: 'app-operationstock-list',
    templateUrl: './operationStock-list.component.ts',
    styleUrls: ['./operationStock-list.component.scss']
})
export class OperationStockListComponent implements OnInit  {
    createDialog: boolean;
    editDialog: boolean;
    viewDialog: boolean;
    submitted: boolean;
    subscribe: boolean;

    private items: Array<OperationStock>;
    private selected: OperationStock;
    private selectes: Array<OperationStock>;
    cols: any[];

    constructor(private messageService: MessageService, private confirmationService: ConfirmationService,
                private service: OperationstockService){ }

    ngOnInit(): void {
        this.initCol();
        this.service.findAll().subscribe(data => this.items = data);
    }
    public delete(selected: OperationStock) {
        this.selected = selected;
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + selected.magasinSource + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteByRef().subscribe(data => {
                    this.items = this.items.filter(val => val.id !== this.selected.id);
                    this.selected = new OperationStock();
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Equipe Deleted',
                        life: 3000
                    });
                });
            }
        });
    }

    public deleteMultiple() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected Operation Stock?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.service.deleteMultipleByRef().subscribe(data =>{
                    this.service.deleteMultipleIndexById();
                    this.selectes = null;
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Successful',
                        detail: 'Operation Stock Deleted',
                        life: 3000
                    });
                });
            }
        });
    }


    public openCreate() {
        this.selected = new OperationStock();
        this.submitted = false;
        this.createDialog = true;
    }

    public edit(operationStock: OperationStock) {
        this.selected = {...operationStock};
        this.editDialog = true;
    }
    public view(operationStock: OperationStock) {
        this.selected = {...operationStock};
        this.viewDialog = true;
    }


    private initCol() {
        this.cols = [

            {field: 'id', header: 'Id'},
            {field: 'magasinSource', header: 'Magasin Source'},
            {field: 'magasinDestination', header: 'Magasin Destination'},
            {field: 'qte', header: 'Quantité'}
        ];
    }

}
