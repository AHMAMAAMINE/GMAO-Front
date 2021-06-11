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
import {MessageService} from 'primeng/api';
// import {MagasinService} from "../../../../controller/service/magasin.service";

@Component({
  selector: "app-stock-create",
  templateUrl: "./stock-create.component.html",
  styleUrls: ["./stock-create.component.scss"],
})
export class StockCreateComponent implements OnInit {
  constructor(
      private service: StockService,
      private materialService: MaterialService,
      private magasinService: MagasinService,
      private messageService: MessageService
  ) {}

  cols: any[];

  public openCreate() {
    this.selected = new Stock();
    this.submitted = false;
    this.createDialog = true;
  }

  public edit(commande: Stock) {
    // this.service
    //   .findByCode(commande.code)
    //   .subscribe((data) => (this.selected = data));
    // console.log(this.selected);
    this.editDialog = true;
  }
  public view(commande: Stock) {
    // console.log(commande.code);
    // this.findByCode(commande.code);
    // this.selected = { ...commande };
    // console.log(commande.etatIntervention.couleur);
    this.viewDialog = true;
  }

  private initCol() {
    this.cols = [
      { field: "magasin", header: "Magasin" },
      { field: "material", header: "Material" },
      { field: "quantite", header: "Quantite" },
    ];
  }

  get materials(): Array<Material> {
    return this.materialService.materials;
  }

  get magasins(): Array<Magasin>{
    return this.magasinService.magasins
  }

  // get stocks(): Array<Stock> {
  //   return this.service.stocks;
  // }

  get selected(): Stock {
    return this.service.selected;
  }

  set selected(value: Stock) {
    this.service.selected = value;
  }

  get items(): Array<Stock> {
    return this.service.items;
  }

  set items(value: Array<Stock>) {
    this.service.items = value;
  }

  get submitted(): boolean {
    return this.service.submitted;
  }

  set submitted(value: boolean) {
    this.service.submitted = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }

  get editDialog(): boolean {
    return this.service.editDialog;
  }

  set editDialog(value: boolean) {
    this.service.editDialog = value;
  }

  get viewDialog(): boolean {
    return this.service.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.service.viewDialog = value;
  }

  get selectes(): Array<Stock> {
    return this.service.selectes;
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(
        (data) => {
          this.items = data;
        },
        (error) => {
          console.log(error);
        }
    );
  }

  deleteMultiple() {

  }

  delete(stock: any) {
    
  }
}
