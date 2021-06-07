import { EquipesService } from "./../../../controller/service/equipes.service";
import { Intervention } from "./../../../controller/model/intervention.model";
import { InterventionService } from "./../../../controller/service/intervention.service";
import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

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
  public fullcalendarOptions: any;
  public events: any;
  public intervetions: Array<Intervention>;
  public encoursInterventions: number;
  public totalInterventions: number;
  public data: any;

  public numEquipes: number;
  public interventionDto = {
    data: [],
  };

  convertInterventions(I) {
    let i = 0;
    this.intervetions.forEach((elem) => {
      ++i;
      let color = "";
      switch (elem.etatIntervention.couleur) {
        case "rouge":
          color = "red";
          break;
        case "vert":
          color = "green";
          break;

        default:
          color = "orange";
          break;
      }
      let obj = {
        id: i,
        color: color,
        title: elem.libelle,
        start: elem.dateDebut.slice(0, 10),
        end: elem.dateFin.slice(0, 10),
      };
      this.interventionDto.data.push(obj);
    });
  }

  ngOnInit(): void {
    this.data = {
      labels: ["en cours", "complete", "hhehe"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
      ],
    };

    this.interventionService.findAll().subscribe((data) => {
      if (data) {
        this.intervetions = data;
        this.totalInterventions = data.length;
        this.encoursInterventions = data.filter((elem) => {
          return elem.etatIntervention.couleur === "orange";
        }).length;

        this.convertInterventions(data);
        this.events = this.interventionDto.data;
        console.log(this.interventionDto);
      }
    });
    this.fullcalendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: "2021-05-31",
      header: {
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      editable: true,
    };
  }
}
