import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngsService } from '../../services/ongs.service';
import { JobsService } from '../../services/jobs.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  user: any = JSON.parse(localStorage.getItem('user'))
  
  ongs: any = {}
  ngos: any = {}
  jobs: any = {}
  events: any = {}
  ong: any = {}
  search: any
  id: any = ''
  name: any = ''
  summary: any = ''
  location: any = ''
  telephone: any = ''
  webSite: any = ''
  poverty: any = ''
  humanRights: any = ''
  health: any = ''
  education: any = ''
  climateChange: any = ''
  animals: any = ''

  constructor(
    private router: Router,
    private ongsService: OngsService,
    private jobsService: JobsService,
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'))
     this.ongs = user.ongs

     this.ongsService.getAllOngs()
    .subscribe(ngos=>{
      this.ngos = ngos
    })

    this.jobsService.getAllJobs()
    .subscribe(jobs=>{
      this.jobs = jobs
    })

    this.eventsService.getAllEvents()
    .subscribe(events=>{
      this.events = events
    })
  }

  createONG(){
    this.ongsService.createOng(this.ong)
    .subscribe(ong=>{
      this.ong = ong
    })
  }

  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['home']);
  }

}
