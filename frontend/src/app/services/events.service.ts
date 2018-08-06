import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  url = "/event/"
  id = ''

  constructor(
    private http: Http,
  ) { }

  //Get all Events
  getAllEvents(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json())) 
  }

  //Get one Event
  getOneEvent(id){
    return this.http.get(this.url + id)
    .pipe(map((res:Response)=>res.json()))
  }

  //Create one Event
  createEvent(id, obj){
    return this.http.post("/ong/" + id, obj)
    .pipe(map((res: Response)=>res.json()))                                                             
  }    
    
  //Edit a Event
  editOneEvent(id, obj){
    return this.http.put(this.url + id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }    

  //delete a Event
  deleteEvent(id){
    return this.http.delete(this.url + id)
    .pipe(map((res: Response)=>res.json()))                                                                
  }

}
