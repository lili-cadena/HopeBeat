import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OngsService } from '../../services/ongs.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  ong = {}

  userOngs = JSON.parse(localStorage.getItem('user.ongs[0]'))
  user = JSON.parse(localStorage.getItem('user'))

  constructor(
    private router: Router,
    private ongsService: OngsService,
  ) { }

  ngOnInit() {
  }

  createONG(){
    this.ongsService.createOng(this.ong)
    .subscribe(ong=>{
      this.ong = ong
      console.log(ong)
    })
  }

  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['home']);
  }

}
