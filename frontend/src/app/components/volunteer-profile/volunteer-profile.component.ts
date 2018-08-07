import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../../services/experiences.service';
import { ActivatedRoute } from '@angular/router';
import { VolunteersService } from '../../services/volunteers.service';


@Component({
  selector: 'app-volunteer-profile',
  templateUrl: './volunteer-profile.component.html',
  styleUrls: ['./volunteer-profile.component.css']
})
export class VolunteerProfileComponent implements OnInit {
  exp: any = {}
  experience: any = {}
  id: any = ''
  user: any = JSON.parse(localStorage.getItem('user'))

  volunteer: any = {}
  volunteers: any = {}

  position: any = ''
  ong: any = ''
  startDate: any = ''
  finalDate: any = ''
  description: any = ''
  logo: any = ''
  
  constructor(
    private experiencesService: ExperiencesService,
    private activeRoute: ActivatedRoute,
    private volunteersService: VolunteersService,
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.volunteersService.getOneVolunteer(this.id)
      .subscribe(volunteer=>{
        this.volunteer = volunteer
      })
    })
  }
  
  createExperience(){
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id
      
      this.experiencesService.createExperience(this.id, this.experience)
      .subscribe(experience=>{
        this.experience = experience
      })
    })
  }
  
  contact(){
    
  }

}
