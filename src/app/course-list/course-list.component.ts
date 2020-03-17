import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  newCourseTitle = ''
  courses = [
    {_id: '123', title: 'Course A'},
    {_id: '234', title: 'Course B'},
    {_id: '345', title: 'Course C'},
    {_id: '456', title: 'Course D'}
  ]

  modules = [
              {    "id": 1,    "title": "React"  },
              {    "id": 2,    "title": "Angular"  },
              {    "id": 3,    "title": "Node.js"  },
              {    "id": 4,    "title": "MongoDB"  }
            ]


  selectedCourseId = 0;
  selectCourse = courseId => {
  this.selectedCourseId = courseId;
  console.log(courseId)
  this.service.findModulesForCourse(courseId).then(modules => this.modules=modules)

  }

  deleteCourse = (deletedCourse) =>
    {this.service.deleteCourse(deletedCourse._id).then(response => console.log(response))
    this.courses = this.courses.filter(course => course !== deletedCourse)}


  createCourse = (title) =>
    this.service.createCourse({'title': title}).then(response => this.courses.push(response))

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
