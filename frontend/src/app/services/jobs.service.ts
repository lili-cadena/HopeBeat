import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  // url = 'http://localhost:3000/api/jobs/'
  url = '/api/jobs/'

  constructor(
    private http: Http,
  ) { }

  //Get all Jobs
  getAllJobs(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json())) 
  }

  //Get one Job
  getOneJob(id){
    return this.http.get(this.url + id)
    .pipe(map((res:Response)=>res.json()))
  }

  //Create one Job
  createJob(id, obj){
    return this.http.post(this.url + id, obj)
    .pipe(map((res: Response)=>res.json()))                                                             
  }    
    
  //Edit a Job
  editOneJob(id, obj){
    return this.http.put(this.url + id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }    

  //delete a Job
  deleteJob(id){
    return this.http.delete(this.url + id)
    .pipe(map((res: Response)=>res.json()))                                                                
  }
}
