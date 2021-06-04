import { OperationstockService } from './../../controller/service/operationstock.service';
import { Component, OnInit } from '@angular/core';
// import { OperationstockService } from '../../Controller/Service/operationstock.service';
import { StockService } from '../../controller/service/stock-service.service';
import { OperationStock } from '../../controller/model/operationStock.model';
import { Stock } from '../../controller/model/Stock.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {error} from '@angular/compiler/src/util';

@Component({
    selector: 'app-operation-stock-list',
    templateUrl: './operation-stock-list.component.html',
    styleUrls: ['./operation-stock-list.component.css'],
})
export class OperationStockListComponent implements OnInit {
    reference: string;
    private closeResult: string;
    qteMin: number;
    qteMax: number;

    constructor(
        private stockService: StockService,
        private operationStockservice: OperationstockService,
        private modalService: NgbModal
    ) {}
    ngOnInit(): void {
        this.operationStockservice.findAll();
    }
    get operationstocks(): Array<OperationStock> {
        return this.operationStockservice.operationstocks;
    }
    get operationstock(): OperationStock {
        return this.operationStockservice.operationstock;
    }
    get stocks(): Array<Stock> {
        return this.stockService.stocks;
    }
    get stock(): Stock {
        return this.stockService.stock;
    }
    delete(i: number, reference: any, ref: string) {}

    update(i: number, c: OperationStock) {}

    find(reference: String) {
        this.operationStockservice.find(reference);
    }

    // findbyCritere(qteMax: any, qteMin: any) {
    // }

    findbyCritere(qteMax: number, qteMin: number) {
        // this.operationStockservice.findByCritere(qteMax,qteMin);
    }
  //  qteMin: number;
  //  qteMax: number;

    open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    Enter(reference: string) {
    }

    // public findByCriteria() {
    //   this.http.post<Array<OperationStock>>(this.urlCriteria,this.operationstockVo).subscribe(
    //     data => {
    //       this.operationstocks = data;
    //     }, error => {
    //      console.log(error);
    //    }
    //  );
    // }
}
