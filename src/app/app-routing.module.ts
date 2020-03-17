import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
 {path: 'details/:courseId', component: CourseViewerComponent},
 {path: 'details', component: CourseViewerComponent},
 {path: 'courses', component: CourseListComponent},
 {path: '', component: HomeComponent},
 {path: 'details/:courseId/modules/:moduleId',component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
