import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {OperationstockService} from '../../../../controller/service/operationstock.service';
import {OperationStock} from '../../../../controller/model/operationStock.model';
import {StockService} from '../../../../controller/service/stock-service.service';
import {Stock} from '../../../../controller/model/Stock.model';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss']
})
export class StockViewComponent implements OnInit {

  constructor( private service: StockService){
  }

  ngOnInit(): void {
  }


  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Stock {
    return this.service.selected;
  }

  set selected(value: Stock) {
    this.service.selected = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }


}
