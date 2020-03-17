import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  lessons =[]
  moduleId =''


  ngOnInit(): void {
  this.route.params.subscribe(params =>{
    this.moduleId=params.moduleId;
        fetch(`https://wbdv-generic-server.herokuapp.com/api/001425561/modules/VsfVjMzA69RFd0Ai/lessons`)
          .then(response => response.json()).then(lessons => this.lessons=lessons);
  });

  }

}
