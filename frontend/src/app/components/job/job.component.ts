import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  ongOwner: any = {}
  applicants: any = {}
  job: any = {}
  id: any = ''
  user: any = JSON.parse(localStorage.getItem('user'))

  constructor(
    private activeRoute: ActivatedRoute,
    private jobsService: JobsService,
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.jobsService.getOneJob(this.id)
      .subscribe(job=>{
        this.job = job
        this.applicants = job.applicants
        this.ongOwner = job.owner
        console.log(this.ongOwner.owner)
      })

    })
  }

  apply(){
    const user = JSON.parse(localStorage.getItem('user'))

    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.jobsService.editOneJob(this.id,{$push:{applicants : user}})
      .subscribe(job=>{
        this.job = job
      })
    })
  }
}
