import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.scss'],
})
export class TopCoursesComponent implements OnInit {
  @Input() title: string;
  courseList: any[];

  constructor() {
    this.title = '';
    this.courseList = [
      {
        name: 'Wordpress For Beginners',
        image:
          'https://www.cenuta.com/blog/wp-content/uploads/2021/10/wordpress-nedir-ne-ise-yarar-ve-nasil-kullanilir-wordpress-neden-kullanilir.jpeg',
        price: '80',
        length: '2 Saat 14 Dakika',
        quantity: '6 Ders',
        star: '124',
      },
      {
        name: 'Wordpress For Beginners',
        image:
          'https://www.cenuta.com/blog/wp-content/uploads/2021/10/wordpress-nedir-ne-ise-yarar-ve-nasil-kullanilir-wordpress-neden-kullanilir.jpeg',
        price: '80',
        length: '2 Saat 14 Dakika',
        quantity: '6 Ders',
        star: '124',
      },
      {
        name: 'Wordpress For Beginners',
        image:
          'https://www.cenuta.com/blog/wp-content/uploads/2021/10/wordpress-nedir-ne-ise-yarar-ve-nasil-kullanilir-wordpress-neden-kullanilir.jpeg',
        price: '80',
        length: '2 Saat 14 Dakika',
        quantity: '6 Ders',
        star: '124',
      },
      {
        name: 'Wordpress For Beginners',
        image:
          'https://www.cenuta.com/blog/wp-content/uploads/2021/10/wordpress-nedir-ne-ise-yarar-ve-nasil-kullanilir-wordpress-neden-kullanilir.jpeg',
        price: '80',
        length: '2 Saat 14 Dakika',
        quantity: '6 Ders',
        star: '124',
      },
    ];
  }

  ngOnInit(): void {}
}
