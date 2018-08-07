import { Component, OnInit } from '@angular/core';
import { OngsService } from '../../services/ongs.service';
import { EventsService } from '../../services/events.service';
import { JobsService } from '../../services/jobs.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ongs: Array<any>
  events: Array<any>
  jobs: Array<any>
  jobOngOwner: any = {}

  constructor(
    private ongsService: OngsService,
    private eventsService: EventsService,
    private jobsService: JobsService,
  ) { }

  ngOnInit() {
    this.ongsService.getAllOngs()
    .subscribe(ongs=>{
      this.ongs = ongs
    })

    this.eventsService.getAllEvents()
    .subscribe(events=>{
      this.events = events
      // this.eventOngOwner = events.ong
    })

    this.jobsService.getAllJobs()
    .subscribe(jobs=>{
      this.jobs = jobs
      // this.jobOngOwner = jobs.ong
    })
  }

}
