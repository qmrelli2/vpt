import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  cards: any[];
  activeCard: number;

  constructor() {
    this.activeCard = 0;
    this.cards = [
      {
        title: 'Eğitmenler İçin',
        icon: 'fas fa-school',
        steps: [
          {
            text: 'Online derslerini kaydet ve yayına hazırla.',
          },
          {
            text: 'VPT üzerinde dersini yayınla ve öğrencilere ulaş.',
          },
          {
            text: 'Ders günü ve saati dersi başlat.',
          },
        ],
      },
      {
        title: 'Öğrenciler İçin',
        icon: 'fas fa-graduation-cap',
        steps: [
          {
            text: 'İlgi alanındaki dersleri bul.',
          },
          {
            text: 'Dersi satın al.',
          },
          {
            text: 'Ders günü ve saati oturuma katıl.',
          },
        ],
      },
    ];
  }

  ngOnInit(): void {}
}
