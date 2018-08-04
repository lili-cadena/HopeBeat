import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  url = "http://localhost:3000/experience/"

  constructor(
    private http: Http,
  ) { }

  //Get all Experiences
  getAllExperiences(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json())) 
  }

  //Get one Experience
  getOneExperience(id){
    return this.http.get(this.url + id)
  }

  //Create one Experience
  createExperience(obj){
    return this.http.post(this.url, obj)
    .pipe(map((res: Response)=>res.json()))                                                             
  }    
    
  //Edit a Experience
  editOneExperience(obj){
    return this.http.put(this.url + obj._id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }    

  //delete a Experience
  deleteExperience(id){
    return this.http.delete(this.url + id)
    .pipe(map((res: Response)=>res.json()))                                                                
  }

}