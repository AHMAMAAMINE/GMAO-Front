import { Stock } from "./../../../../controller/model/Stock.model";
import { StockService } from "./../../../../controller/service/stock-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stock-view",
  templateUrl: "./stock-view.component.html",
  styleUrls: ["./stock-view.component.scss"],
})
export class StockViewComponent implements OnInit {
  constructor(private stockService: StockService) {}

  ngOnInit(): void {}

  public hideViewDialog() {
    this.viewDialog = false;
  }

  get selected(): Stock {
    return this.stockService.selected;
  }

  set selected(value: Stock) {
    this.stockService.selected = value;
  }

  get viewDialog(): boolean {
    return this.stockService.viewDialog;
  }

  set viewDialog(value: boolean) {
    this.stockService.viewDialog = value;
  }
}
