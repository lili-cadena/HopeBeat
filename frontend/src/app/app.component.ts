import { Component } from '@angular/core';
import { OngsService } from './services/ongs.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  id
  ong = {}
  userOngs = JSON.parse(localStorage.getItem('user.ongs[0]'))
  
  constructor(
    private router: Router,
    private ongsService: OngsService,
    private activeRoute: ActivatedRoute,
  ) { }

  
  logout(){
    localStorage.removeItem('user')
    this.router.navigate(['home']);
  }

}