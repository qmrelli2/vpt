import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  showPopup: boolean;

  constructor() {
    this.showPopup = false;
  }

  ngOnInit(): void {}

  togglePopup(val: boolean) {
    if (val) {
      this.showPopup = true;
    } else {
      this.showPopup = false;
    }
  }
}
