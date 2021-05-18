import {Component, OnInit} from "@angular/core";
import {MessageService} from "primeng/api";
import {OperationstockService} from "../../../../controller/service/operationstock.service";
import {OperationStock} from "../../../../controller/model/operationStock.model";
import {Equipe} from "../../../../controller/model/equipe.model";


@Component({
    selector: 'app-operationstock-edit',
    templateUrl: './operationStock-edit.component.html',
    styleUrls: ['./operationStock-edit.component.scss']
})
export class OperationStockEditComponent implements OnInit {

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
    

}
