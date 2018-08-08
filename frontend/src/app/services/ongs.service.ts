import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OngsService {

  // url = 'http://localhost:3000/api/ongs/'
  url = '/api/ongs/'

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
    .pipe(map((res:Response)=>res.json())) 
  }

  //Create one ONG
  createOng(obj){
    return this.http.post(this.url, obj, {withCredentials:true})
    .pipe(map((res: Response)=>res.json()))                                                             
  }    
    
  //Edit a ONG
  editOneOng(id, obj){
    return this.http.put(this.url + id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }    

  //delete a ONG
  deleteOng(id){
    return this.http.delete(this.url + id)
    .pipe(map((res: Response)=>res.json()))                                                                
  }


}
