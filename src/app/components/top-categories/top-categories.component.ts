import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  templateUrl: './top-categories.component.html',
  styleUrls: ['./top-categories.component.scss'],
})
export class TopCategoriesComponent implements OnInit {
  categoryList: any[];

  constructor() {
    this.categoryList = [
      {
        name: 'Tasarım',
        icon: 'fas fa-drafting-compass',
      },
      {
        name: 'Video',
        icon: 'fas fa-photo-video',
      },
      {
        name: 'Yazılım',
        icon: 'fas fa-code',
      },
      {
        name: 'Oyunculuk',
        icon: 'fas fa-theater-masks',
      },
      {
        name: 'Seslendirme',
        icon: 'fas fa-microphone-alt',
      },
      {
        name: 'Matematik',
        icon: 'fas fa-square-root-alt',
      },
    ];
  }

  ngOnInit(): void {}
}
