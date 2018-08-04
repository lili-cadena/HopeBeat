import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OngsService } from '../../services/ongs.service';

@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.css']
})
export class VolunteerProfileComponent implements OnInit {
  ong= {}
  id= ''
  
  constructor(
    private activeRoute: ActivatedRoute,
    private ongService: OngsService,

  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.ongService.getOneOng(this.id)
      .subscribe(ong=>{
        this.ong = ong
      })
    })
  }

}
