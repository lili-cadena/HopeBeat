import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {

  url = 'http://localhost:3000/volunteer/'
  // url = '/volunteer/'

  constructor(
    private http: Http,
  ) { }

  //Get all Volunteers
  getAllVolunteers(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json())) 
  }

  //Get one Volunteer
  getOneVolunteer(id){
    return this.http.get(this.url + id)
    .pipe(map((res:Response)=>res.json())) 
  }   
    
  //Edit a Volunteer
  editOneVolunteer(id, obj){
    return this.http.put(this.url + id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }    

  //Delete a Volunteer
  deleteVolunteer(id){
    return this.http.delete(this.url + id)
    .pipe(map((res: Response)=>res.json()))                                                                
  }


}
