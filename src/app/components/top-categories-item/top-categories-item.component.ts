import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-categories-item',
  templateUrl: './top-categories-item.component.html',
  styleUrls: ['./top-categories-item.component.scss'],
})
export class TopCategoriesItemComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
