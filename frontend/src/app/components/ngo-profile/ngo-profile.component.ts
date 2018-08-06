import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OngsService } from '../../services/ongs.service';
import { EventsService } from '../../services/events.service';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-ngo-profile',
  templateUrl: './ngo-profile.component.html',
  styleUrls: ['./ngo-profile.component.css']
})
export class NgoProfileComponent implements OnInit {
  ong: any = {}
  event: any = {}
  job: any = {}
  id = ''

  constructor(
    private activeRoute: ActivatedRoute,
    private ongsService: OngsService,
    private eventService: EventsService,
    private jobService: JobsService,
    private router: Router,
  ) { }

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

  //ONG Settings
  editOng(){
    this.ongsService.editOneOng(this.ong)
    .subscribe(()=>{
      this.router.navigate(['ong/' + this.ong._id])
    })
  }

  deleteOng(){
    if(!window.confirm('Are you sure?')) return
    this.ongsService.deleteOng(this.ong)
    .subscribe(()=>{
      this.router.navigate(['search'])
    })
  }

  //Event Settings
  createEvent(){
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id
      
      this.eventService.createEvent(this.event, this.id)
      .subscribe(event=>{
        this.event = event
        console.log(event)
      })
    })
  }

  editEvent(){
    this.eventService.editOneEvent(this.event)
    .subscribe(()=>{
      this.router.navigate(['ong/' + this.ong._id])
    })
  }
  
  deleteEvent(){
    if(!window.confirm('Are you sure?')) return
    this.eventService.deleteEvent(this.event)
    .subscribe(()=>{
      this.router.navigate(['ong/' + this.ong._id])
    })
  }

  //Job Settings
  createJob(){
    this.jobService.createJob(this.job)
    .subscribe(job=>{
      this.job = job
      console.log(job)
    })
  }

  editJob(){
    this.jobService.editOneJob(this.job)
    .subscribe(()=>{
      this.router.navigate(['ong/' + this.ong._id])
    })
  }

  deleteJob(){
    if(!window.confirm('Are you sure?')) return
    this.jobService.deleteJob(this.job)
    .subscribe(()=>{
      this.router.navigate(['ong/' + this.ong._id])
    })
  }

}
