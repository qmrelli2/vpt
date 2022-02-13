import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-courses-item',
  templateUrl: './top-courses-item.component.html',
  styleUrls: ['./top-courses-item.component.scss'],
})
export class TopCoursesItemComponent implements OnInit {
  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    this.router.navigate(['course-detail']);
  }
  @Input() item: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
