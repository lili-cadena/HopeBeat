import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  url = "http://localhost:3000/api/"
  // url = '/api/'

  constructor(
    private http: Http,
  ) { }

  signup(auth): Observable<string>{
    return this.http.post(this.url + 'signup', auth)
    .pipe(map((res:Response)=>res.json()))
  }

  login(auth): Observable<string>{
    return this.http.post(this.url + 'login', auth, {withCredentials:true})
    .pipe(map((res:Response)=>res.json()))
  }

  logout(){
    localStorage.removeItem('user')
  }

  getOneVolunteer(){
    return this.http.get(this.url+ 'login')
    .pipe(map((res:Response)=>res.json())) 
  }

  editVolunteerProfile(id, obj){
    return this.http.put(this.url + 'login' + id, obj) 
    .pipe(map((res: Response)=>res.json()))    
  }   
  
}
