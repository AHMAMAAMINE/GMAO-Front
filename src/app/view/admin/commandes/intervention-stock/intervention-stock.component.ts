import { Component, OnInit } from "@angular/core";
import { StockService } from "../../../../controller/service/stock-service.service";
import { InterventionService } from "../../../../controller/service/intervention.service";
import { MaterialService } from "../../../../controller/service/material.service";
import { MagasinService } from "../../../../controller/service/magasin.service";
import { Intervention } from "../../../../controller/model/intervention.model";
import { MateraialIntervention } from "../../../../controller/model/materaial-intervention.model";
import { Magasin } from "../../../../controller/model/magasin.model";
import { Material } from "../../../../controller/model/material.model";
import { Stock } from "../../../../controller/model/Stock.model";
import { newArray } from "@angular/compiler/src/util";
import {InterventionMembreEquipe} from '../../../../controller/model/intervention-membre-equipe.model';

@Component({
  selector: "app-intervention-stock",
  templateUrl: "./intervention-stock.component.html",
  styleUrls: ["./intervention-stock.component.scss"],
})
export class InterventionStockComponent implements OnInit {
  index: any;
  values;
  cols: any[];
  valeur: any;
  velues: any;
  constructor(
    private stockService: StockService,
    private service: InterventionService,
    private materialService: MaterialService,
    private magasinService: MagasinService
  ) {}

  get selectes(): Array<Intervention> {
    return this.service.selectes;
  }
  set selectes(value: Array<Intervention>) {
    this.service.selectes = value;
  }
  get intervention(): Intervention {
    return this.service.selected;
  }
  get stock(): Stock {
    return this.stockService.selected;
  }
  get stocks(): Array<Stock> {
    return this.stockService.items;
  }
  get materials(): Array<Material> {
    return this.materialService.materials;
  }
  get material(): Material {
    return this.materialService.material;
  }
  get magasins(): Array<Magasin> {
    return this.magasinService.magasins;
  }
  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  ngOnInit(): void {
    this.materialService.findAll();
    this.magasinService.findAll();
  }

  // value() {
  //   console.log(this.materialService.materials);
  //   for (let i = 0; i < this.materials.length; i++) {
  //     console.log(this.materials[i].reference);
  //     this.values.push(this.materials[i].reference);
  //     console.log(this.values[0]);
  //   }
  //   return this.values;
  // }
  isupdateable() {
    // return this.stock.id != null;
  }

  public Save() {
    return this.stockService.save();
  }
  empty() {}

  evaluate() {
    if (this.intervention.code == null) {
      this.Save();
    } else {
      this.valeur = "---select value-----";
      this.velues = "---select value-----";
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
  get materialInterventions(): Array<MateraialIntervention> {
    return this.service.materialInterventions;
  }

  set materialInterventions(value: MateraialIntervention[]) {
    this.service.materialInterventions = value;
  }
  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }
  public edit(commande: Stock) {
    console.log(commande.magasin.reference)
    this.velues = commande.magasin.reference;
    this.valeur = commande.material.reference;
    this.stock.qte=commande.qte;
    // this.selection = commande;
    // console.log(commande.id);
    // this.editDialog = true;

  }
}
