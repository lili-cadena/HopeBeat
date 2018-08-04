import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  auth = {}
  user = null
  logError = null

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  signup(){
    this.authService.signup(this.auth)
    .subscribe(user=>{
      this.user = user
      this.router.navigate(['search']);
    })
  }

  login(){
    this.authService.login(this.auth)
    .subscribe(user=>{
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      this.router.navigate(['search']);
    })
  }

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['search'])
    }
  }
}


