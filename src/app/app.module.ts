import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { HeroComponent } from './components/hero/hero.component';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { TopCategoriesItemComponent } from './components/top-categories-item/top-categories-item.component';
import { TopCoursesComponent } from './components/top-courses/top-courses.component';
import { TopCoursesItemComponent } from './components/top-courses-item/top-courses-item.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactCardsComponent } from './components/contact-cards/contact-cards.component';
import { ContactMapComponent } from './components/contact-map/contact-map.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { UserCourseComponent } from './components/user-course/user-course.component';
import { CourseMainComponent } from './components/course-main/course-main.component';
import { CourseDescriptionComponent } from './components/course-description/course-description.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HeroComponent,
    TopCategoriesComponent,
    TopCategoriesItemComponent,
    TopCoursesComponent,
    TopCoursesItemComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    CoursesComponent,
    LoginFormComponent,
    AboutComponent,
    FooterComponent,
    RegisterFormComponent,
    ContactFormComponent,
    ContactCardsComponent,
    ContactMapComponent,
    UserProfileComponent,
    SideBarComponent,
    UserCourseComponent,
    CourseMainComponent,
    CourseDescriptionComponent,
    CourseDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
