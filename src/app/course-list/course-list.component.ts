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

  selectedCourseId = 0;
  selectCourse = courseId => {
  this.selectedCourseId = courseId;
  console.log(courseId)
  }


  deleteCourse = (deletedCourse) =>
    this.courses = this.courses.filter(course => course !== deletedCourse)

  createCourse = (title) =>
    this.service.createCourse({'title': title}).then(response => this.courses.push(response))

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
