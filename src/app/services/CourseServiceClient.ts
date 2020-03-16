 import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001425561/courses")
      .then(response => response.json());

  findCourseById = (cid) =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001425561/courses/"+ cid)
       .then(response => response.json());

  createCourse = (course) =>
  fetch("https://wbdv-generic-server.herokuapp.com/api/001425561/courses",
  {
          method: "POST",
          body: JSON.stringify(course),
          headers: {
              'content-type': 'application/json'
          }
      }).then(response => response.json());
}
