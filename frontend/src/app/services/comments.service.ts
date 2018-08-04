import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  url = "http://localhost:3000/comment/"

  constructor(
    private http: Http,
  ) { }

  //Get all Comments
  getAllComments(){
    return this.http.get(this.url)
    .pipe(map((res:Response)=>res.json())) 
  }

  //Get one Comment
  getOneComment(id){
    return this.http.get(this.url + id)
  }

  //Create one Comment
  createEvent(obj){
    return this.http.post(this.url, obj)
    .pipe(map((res: Response)=>res.json()))                                                             
  }    
    
  //Edit a Comment
  editOneComment(obj){
    return this.http.put(this.url + obj._id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }    

  //delete a Comment
  deleteComment(id){
    return this.http.delete(this.url + id)
    .pipe(map((res: Response)=>res.json()))                                                                
  }

}
