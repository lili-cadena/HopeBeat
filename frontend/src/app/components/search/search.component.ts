import { Component, OnInit } from '@angular/core';
import { OngsService } from '../../services/ongs.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ongs: Array<any>
  constructor(
    private ongsService: OngsService,
  ) { }

  ngOnInit() {
    this.ongsService.getAllOngs()
    .subscribe(ong=>{
      this.ongs = ong
    })
  }

}
