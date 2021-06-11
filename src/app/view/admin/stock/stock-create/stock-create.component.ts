import { InterventionVo } from "./../../../../controller/model/intervention-vo.model";
import { MateraialIntervention } from "./../../../../controller/model/materaial-intervention.model";
import { Magasin } from "./../../../../controller/model/magasin.model";
import { Material } from "./../../../../controller/model/material.model";
import { Stock } from "./../../../../controller/model/Stock.model";
import { Intervention } from "./../../../../controller/model/intervention.model";
import { InterventionService } from "./../../../../controller/service/intervention.service";
import { MagasinService } from "./../../../../controller/service/magasin.service";
import { MaterialService } from "./../../../../controller/service/material.service";
import { StockService } from "./../../../../controller/service/stock-service.service";
import { Component, OnInit } from "@angular/core";
// import {MagasinService} from "../../../../controller/service/magasin.service";

@Component({
  selector: "app-stock-create",
  templateUrl: "./stock-create.component.html",
  styleUrls: ["./stock-create.component.scss"],
})
export class StockCreateComponent implements OnInit {
  constructor(
    private stockService: StockService,
    private interventionService: InterventionService,
    private materialService: MaterialService,
    private magasinService: MagasinService
  ) {}

  get intervention(): InterventionVo {
    return this.interventionService.interventionVo;
  }
  get stock(): Stock {
    return this.stockService.selected;
  }
  get materials(): Array<Material> {
    return this.materialService.materials;
  }
  get magasins(): Array<Magasin> {
    return this.magasinService.magasins;
  }

  ngOnInit(): void {
    this.materialService.findAll();
    this.magasinService.findAll();
  }
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
      const materialintervention = new MateraialIntervention();
      materialintervention.material = this.stock.material;
      materialintervention.magasin = this.stock.magasin;
      materialintervention.qte = this.stock.qte;
      this.interventionService.materialIntervention = materialintervention;
      this.interventionService.saveStock();
    }
  }
  isSelected($event: any) {
    this.stock.magasin.reference = $event.target.value;
  }

  isSelecte($event: any) {
    this.stock.material.reference = $event.target.value;
  }
}
