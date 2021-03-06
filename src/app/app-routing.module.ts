import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { InstructorProfile } from './pages/instructor-profile/instructor-profile.component';
import { InstructorGlobalProfile } from './pages/instructor-global-profile/instructor-global-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'user',
    component: UserProfileComponent,
  },
  {
    path: 'course-detail',
    component: CourseDetailComponent,
  },
  {
    path: 'instructor-profile',
    component: InstructorProfile,
  },
  {
    path: 'instructor-global-profile',
    component: InstructorGlobalProfile,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
