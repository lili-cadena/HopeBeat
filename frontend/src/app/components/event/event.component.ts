import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: any = {}
  comment: any = {}
  id: any = ''

  constructor(
    private activeRoute: ActivatedRoute,
    private eventsService: EventsService,
    private commentsService: CommentsService,
    private router: Router,
  ) { }

  //Comment Settings
  createComment(){
    this.commentsService.createComment(this.comment)
    .subscribe(comment=>{
      this.comment = comment
    })
  }

  editComment(){
    this.commentsService.editOneComment(this.comment)
    .subscribe(()=>{
      this.router.navigate(['event/' + this.event._id])
    })
  }
  
  deleteComment(){
    if(!window.confirm('Are you sure?')) return
    this.commentsService.deleteComment(this.comment)
    .subscribe(()=>{
      this.router.navigate(['event/' + this.event._id])
    })
  }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id

      this.eventsService.getOneEvent(this.id)
      .subscribe(event=>{
        this.event = event
      })

    })
  }

  attend(){
    const user = JSON.parse(localStorage.getItem('user'))

    this.activeRoute.params
    .subscribe(params=>{
      this.id = params.id
      this.eventsService.editOneEvent(this.id, {$push:{attendees : user}}, {new: true})
      .subscribe(event=>{
        this.event = event
        console.log(event)
      })
    })
  }

}
