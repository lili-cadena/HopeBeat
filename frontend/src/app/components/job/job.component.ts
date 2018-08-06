import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  
  job: any = {}
  id = ''

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
        console.log(job)
      })

    })
  }

}
