import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockService } from './stock-service.service';
import { OperationStock } from '../model/operationStock.model';
import {Magasin} from "../model/magasin.model";
import {Material} from "../model/material.model";
import {environment} from "../../../environments/environment";
import {Equipe} from "../model/equipe.model";

@Injectable({
  providedIn: 'root',
})
export class OperationstockService {

//  private url = environment.baseUrl + 'operationStock';
  private items: Array<OperationStock>;
  private selected: OperationStock;
  private selectes: Array<OperationStock>;

  private createDialog: boolean;
  private editDialog: boolean;
  private viewDialog: boolean;
  private submitted: boolean;

     constructor(private http: HttpClient, private stockservice: StockService) {}
  get operationstock(): OperationStock {
    if (this._operationstock == null) {
      this._operationstock = new OperationStock();
    }
    return this._operationstock;
  }

  set operationstock(value: OperationStock) {
    this._operationstock = value;
  }

  get operationstocks(): Array<OperationStock> {
    if (this._operationstocks == null) {
      this._operationstocks = new Array<OperationStock>();
    }
    return this._operationstocks;
  }

  set operationstocks(value: Array<OperationStock>) {
    this._operationstocks = value;
  }
  private urlBase = 'http://localhost:8036';
  private url = '/Stock/OperationStockBean';
  private _operationstock: OperationStock;
  private _operationstocks: Array<OperationStock>;
  findAll(): void {
    this.http
      .get<Array<OperationStock>>(this.urlBase + this.url + '/')
      .subscribe((data) => {
        this.operationstocks = data;
      });
  }

  save() {
    this.http
      .post(this.urlBase + this.url + '/', this.operationstock)
      .subscribe((data) => {
        if (data === -1) {
          alert(
            'l un d est reference entre n est pas disponible dans la base de donnees'
          );
        }
        if (data === -2) {
          open('http://localhost:4200/stocks');
          alert('veuiliez enregistre un stock');
        }
        if (data === -3) {
          alert('la quantites voulu a transferee n est pas disponible ');
        }
        this.operationstock = null;
        if (data > 0) {
          this.operationstock.id = this.operationstocks.length + 1;
          this.operationstocks.push(this.clone(this.operationstock));
          this.findAll();
          this.operationstock = null;
        }
      });
  }

  private clone(operationstock: OperationStock) {
    const myClone = new OperationStock();
    myClone.qte = operationstock.qte;
    myClone.magasinSource.reference = operationstock.magasinSource.reference;
    myClone.magasinDestination.reference =
      operationstock.magasinDestination.reference;
    myClone.id = operationstock.id;
    myClone.material.reference = operationstock.material.reference;
    return myClone;
  }

  find(reference: string) {
    this.http
      .get<Array<OperationStock>>(
        this.urlBase + this.url + '/trouve/refmagasin/' + reference
      )
      .subscribe((data) => {
        console.log(data);
        this.operationstocks = data;
      });
  }

  // findByCritere(qteMax: number, qteMin: number) {
  //   this.http.post<Array<OperationStock>>(this.urlBase+this.url+'/criteria',qte)
  // }
    findIndexById(id: number) {
        return 0;
    }

  edit() { }

    deleteByRef() {
    }

  deleteMultipleByRef() {

  }

  deleteMultipleIndexById() {

  }
}
