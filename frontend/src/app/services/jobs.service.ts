import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  url = "http://localhost:3000/job/"

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
  }

  //Create one Job
  createJob(obj){
    return this.http.post(this.url, obj)
    .pipe(map((res: Response)=>res.json()))                                                             
  }    
    
  //Edit a Job
  editOneJob(obj){
    return this.http.put(this.url + obj._id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }    

  //delete a Job
  deleteJob(id){
    return this.http.delete(this.url + id)
    .pipe(map((res: Response)=>res.json()))                                                                
  }
}
