import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AccordionModule } from "primeng/accordion";
import { TacheInterventionService } from "../../../controller/service/tache-intervention.service";
import { CollaborateurService } from "../../../controller/service/collaborateur.service";
import { TacheIntervention } from "../../../controller/model/tache-intervention.model";

@Component({
  selector: "app-dashbord",
  templateUrl: "./dashbord.component.html",
  styleUrls: ["./dashbord.component.scss"],
  providers: [DatePipe],
})
export class DashbordComponent implements OnInit {
  private fullcalendarOptions = new Object();

  private etat: boolean;
  private events: any;

  constructor(
    private datePipe: DatePipe,
    private service: TacheInterventionService
  ) {}

  private completed = this.vos.filter((item) => {
    return item.etatTache === true;
  });

  get events_service(): any {
    return this.service.events;
  }
  private num1 = this.completed.length;
  private pourcentage = Number().toFixed(this.num1 / this.vos.length);
  ngOnInit(): void {
    this.service.findAllInterventions();
    console.log(this.events_service);

    this.events = this.events_service;

    const now = this.datePipe.transform(new Date(), "yyyy-MM-dd");
    this.fullcalendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: now,
      // defaultDate: "2021-05-31",
      header: {
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      editable: true,
    };
  }
  get vos(): any[] {
    return this.service.vos;
  }

  get items(): Array<TacheIntervention> {
    return this.service.items;
  }

  completerTache(s: string) {
    this.service.completerTache(s).subscribe((data) => {
      console.log(data);
    });
  }
}
