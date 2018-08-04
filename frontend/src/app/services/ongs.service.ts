import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OngsService {
  url = "http://localhost:3000/ong/"

  constructor(
    private http: Http,
  ) { }


  //Get all ONGs
  getAllOngs(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json())) 
  }

  //Get one ONG
  getOneOng(id){
    return this.http.get(this.url + id)
  }

  //Create one ONG
  createOng(obj){
    return this.http.post(this.url, obj)
    .pipe(map((res: Response)=>res.json()))                                                             
  }    
    
  //Edit a ONG
  editOneOng(obj){
    return this.http.put(this.url + obj._id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }    

  //delete a ONG
  deleteOng(id){
    return this.http.delete(this.url + id)
    .pipe(map((res: Response)=>res.json()))                                                                
  }
 

}
