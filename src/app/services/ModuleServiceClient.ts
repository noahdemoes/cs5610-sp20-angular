 import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (cid) =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/001425561/courses")
      .then(response => response.json());

  createModule= (cid) =>
  fetch('https://wbdv-generic-server.herokuapp.com/api/001425561/courses' + cid + '/module',
  {
          method: "POST",
          body: JSON.stringify({'title':"New Module"}),
          headers: {
              'content-type': 'application/json'
          }
      }).then(response => response.json());
}
