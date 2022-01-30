import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-courses-item',
  templateUrl: './top-courses-item.component.html',
  styleUrls: ['./top-courses-item.component.scss'],
})
export class TopCoursesItemComponent implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit(): void {}
}
