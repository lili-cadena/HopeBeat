import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  attendees: any = {}
  event: any = {}
  comment: any = {}
  id: any = ''

  constructor(
    private activeRoute: ActivatedRoute,
    private eventsService: EventsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.eventsService.getOneEvent(this.id)
      .subscribe(event=>{
        this.event = event
        this.attendees = event.attendees
      })

    })
  }

  attend(){
    const user = JSON.parse(localStorage.getItem('user'))

    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id
      
      this.eventsService.editOneEvent(this.id, {$push:{attendees : user}})
      .subscribe(event=>{
        this.event = event
      })
    })
  }

}
