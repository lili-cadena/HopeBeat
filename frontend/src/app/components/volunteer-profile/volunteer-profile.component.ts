import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../services/experiences.service';

@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.css']
})
export class VolunteerProfileComponent implements OnInit {
  experiences= {}
  
  constructor(
    private experiencesService: ExperiencesService,

  ) { }

  ngOnInit() {
    this.experiencesService.getAllExperiences()
    .subscribe(experiences=>{
      this.experiences = experiences
    })
  }

}
