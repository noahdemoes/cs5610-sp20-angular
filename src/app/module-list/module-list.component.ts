import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  modules = [
  {_id:"123",title:"Module 1"},
  {_id:"456",title:"Module 2"},
  {_id:"789",title:"Module 3"}
  ]
  courseId =''

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
    this.courseId = params.courseId})
  }

}
