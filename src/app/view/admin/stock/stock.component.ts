import { EquipesService } from "./../../../controller/service/equipes.service";
import { Intervention } from "./../../../controller/model/intervention.model";
import { InterventionService } from "./../../../controller/service/intervention.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.scss"],
})
export class StockComponent implements OnInit {
  constructor(
    private interventionService: InterventionService,
    private equipesService: EquipesService
  ) {}

  public intervetions: Array<Intervention>;
  public numInterventions: number;
  public numEquipes: number;

  ngOnInit(): void {
    this.interventionService.findAll().subscribe((data) => {
      if (data) {
        this.intervetions = data;
        this.numInterventions = data.length;
      }
    });
    this.equipesService.findAll().subscribe((data) => {
      if (data) {
        this.numEquipes = data.length;
      }
    });
  }
}
