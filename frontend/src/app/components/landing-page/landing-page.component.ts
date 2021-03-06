import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';


@Component({  
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  auth: any = {}
  user: any = null
  signError: any
  logError: any
  element: any

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) { }

  authWithFacebook(){
    this.firebaseService.loginWithFacebook()
    this.router.navigate(['search'])
  }

  signup(){
    this.authService.signup(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['search']);
    }, e=>{
      this.signError = 'Something went wrong, try again please'
    })
  }

  login(){
    this.authService.login(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['search']);
    }, e=>{
      this.logError = 'Something went wrong, try again please'
    })

    
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['search'])
    }
  }
}


