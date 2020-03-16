 import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001425561/courses")
      .then(response => response.json());
}
