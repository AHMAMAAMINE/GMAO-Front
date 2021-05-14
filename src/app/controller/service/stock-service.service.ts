import { Injectable } from '@angular/core';
import { Stock } from '../model/Stock.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  private _stock: Stock;
  private _stocks: Array<Stock>;
  private urlBase = 'http://localhost:8036';
  private url = '/Stock-api/Stockage';
  private _index: number;

  get stock(): Stock {
    if (this._stock == null) {
      this._stock = new Stock();
    }
    return this._stock;
  }

  set stock(value: Stock) {
    this._stock = value;
  }

  get stocks(): Array<Stock> {

    if (this._stocks == null) {
      this._stocks = new Array<Stock>();
    }
    return this._stocks;
  }

  set stocks(value: Array<Stock>) {
    this._stocks = value;
  }
  constructor(private http: HttpClient) { }

  save() {
    if (this.stock.id == null) {
      this.http.post(this.urlBase + this.url + '/', this.stock).subscribe(
        data => {
          if (data === 1){
            this.findAll();
          }
          if (data === -2) {
            alert('donner une valeur deja existante ');
          }
          if (data === 2){
            this.findAll();
          }
        }, error => alert('error 404')
      );
    }
    else{
      const stocke = new Stock();
      stocke.qte = this.stock.qte - this.stocks[this._index].qte;
      stocke.id = this.stock.id;
      stocke.material.reference = this.stock.material.reference;
      stocke.magasin.reference = this.stock.magasin.reference;
      this.http.post(this.urlBase + this.url + '/', stocke).subscribe(
        data => {
          console.log(data);
        }
      );
      this.stocks[this._index] = this.clone(this.stock);
    }
    this.stock = null;
  }

   findAll() {
      this.http.get<Array<Stock>>(this.urlBase + this.url + '/').subscribe(
        data => {
          this.stocks = data;
        }, error => {
          console.log(error);
        });
    }

   clone(stock: Stock) {
    const myClone = new Stock();
    myClone.id = stock.id;
    myClone.material.reference = stock.material.reference;
    myClone.qte = stock.qte;
    myClone.magasin.reference = stock.magasin.reference;
    return myClone;
  }
}
