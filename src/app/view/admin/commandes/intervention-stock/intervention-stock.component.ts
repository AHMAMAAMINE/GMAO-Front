import { Component, OnInit } from '@angular/core';
import {StockService} from '../../../../controller/service/stock-service.service';
import {InterventionService} from '../../../../controller/service/intervention.service';
import {MaterialService} from '../../../../controller/service/material.service';
import {MagasinService} from '../../../../controller/service/magasin.service';
import {Intervention} from '../../../../controller/model/intervention.model';
import {MateraialIntervention} from '../../../../controller/model/materaial-intervention.model';
import {Magasin} from '../../../../controller/model/magasin.model';
import {Material} from '../../../../controller/model/material.model';
import {Stock} from '../../../../controller/model/Stock.model';

@Component({
  selector: 'app-intervention-stock',
  templateUrl: './intervention-stock.component.html',
  styleUrls: ['./intervention-stock.component.scss']
})
export class InterventionStockComponent implements OnInit {
  countries: any[];
  filteredCountries: any[];
  constructor(private stockService: StockService, private service: InterventionService, private materialService: MaterialService, private  magasinService: MagasinService) { }



  filterCountry(event) {

    // in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.materials.length; i++) {

      if ( this.materials[i].reference.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push( this.materials[i].reference);
      }
    }

    this.filteredCountries = filtered;
  }

  ngOnInit(): void {
    this.materialService.findAll();
    this.magasinService.findAll();
  }


  get intervention(): Intervention {
    return this.service.selected;
  }
  get stock(): Stock {
    return this.stockService.stock;
  }
  get materials(): Array<Material>{
    return this.materialService.materials;
  }
  get magasins(): Array<Magasin>{
    return this.magasinService.magasins;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }


  isupdateable() {
    // return this.stock.id != null;
  }

  public Save(){
    return this.stockService.save();
  }
  empty() {
  }

  evaluate() {
    if (this.intervention.code == null){
      this.Save();
    }
    else {
      const materialintervention = new MateraialIntervention();
      materialintervention.material = this.stock.material;
      materialintervention.magasin = this.stock.magasin;
      materialintervention.qte = this.stock.qte;
      this.service.materialIntervention = materialintervention;
      this.service.saveStock();
    }

  }
  isSelected($event: any) {
    this.stock.magasin.reference = $event.target.value;
  }

  isSelecte($event: any) {
    this.stock.material.reference = $event.target.value;
  }

}
