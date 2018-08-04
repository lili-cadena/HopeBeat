import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OngsService } from '../../services/ongs.service';
import { EventsService } from '../../services/events.service';



@Component({
  selector: 'app-ngo-profile',
  templateUrl: './ngo-profile.component.html',
  styleUrls: ['./ngo-profile.component.css']
})
export class NgoProfileComponent implements OnInit {
  event: any = {}
  ong: any = {}
  id = ''

  constructor(
    private activeRoute: ActivatedRoute,
    private ongsService: OngsService,
    private eventService: EventsService,
  ) { }

  createEvent(){
    this.eventService.createEvent(this.event)
    .subscribe(event=>{
      this.event = event
    })
  }

  createJob(){

  }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.ongsService.getOneOng(this.id)
      .subscribe(ong=>{
        this.ong = ong
        console.log(ong)
      })

    })
  }

}
