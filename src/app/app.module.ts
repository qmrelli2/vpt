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
    FooterComponent
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
