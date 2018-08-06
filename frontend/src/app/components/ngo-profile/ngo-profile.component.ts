import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OngsService } from '../../services/ongs.service';
import { EventsService } from '../../services/events.service';
import { JobsService } from '../../services/jobs.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ngo-profile',
  templateUrl: './ngo-profile.component.html',
  styleUrls: ['./ngo-profile.component.css']
})
export class NgoProfileComponent implements OnInit {
  ong: any = []
  o: any = {}
  event: any = {}
  job: any = {}
  id: any = ''
  jobs: any = []
  events: any = []
  title: any
  startDate: any
  finalDate: any
  startHour: any
  finalHour: any
  location: any
  description: any
  photo: any
  position: any
  weeklyRequiredHours: any
  requests: any
  
  constructor(
    private activeRoute: ActivatedRoute,
    private ongsService: OngsService,
    private eventService: EventsService,
    private jobService: JobsService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.ongsService.getOneOng(this.id)
      .subscribe(ong=>{
        this.ong = ong
        this.jobs = ong.jobs
        this.events = ong.events
      })
    })
  }

  //Follow
  follow(){
    const user = JSON.parse(localStorage.getItem('user'))

    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.ongsService.editOneOng(this.id, {followers : user})
      .subscribe(o=>{
        this.o = o
      })

      this.authService.editVolunteerProfile(this.id, {following : this.o.id})
      .subscribe(user=>{
        user = user
        localStorage.setItem('user', JSON.stringify(user))
      })
    })
  }

  // ONG Settings

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
      
      this.eventService.createEvent(this.id, this.event)
      .subscribe(event=>{
        this.event = event
      })
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
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id
      
      this.jobService.createJob(this.id, this.job)
      .subscribe(job=>{
        this.job = job
      })
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
