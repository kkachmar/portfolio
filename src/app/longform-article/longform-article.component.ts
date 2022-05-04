import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-case-study',
  templateUrl: './longform-article.component.html',
  styleUrls: ['./longform-article.component.scss']
})
export class LongformArticleComponent implements OnInit {
  responsiveOptions: any[];
  images: string[] = []
  currentImage: string = ""

  constructor() {

    this.images = [
      'assets/longform-article/wireframes/la-wireframe-6.jpg',
      'assets/longform-article/wireframes/la-wireframe-5.jpg',
      'assets/longform-article/wireframes/la-wireframe-4.jpg',
      'assets/longform-article/wireframes/la-wireframe-3.jpg',
      'assets/longform-article/wireframes/la-wireframe-2.jpg',
      'assets/longform-article/wireframes/la-wireframe-1.jpg',
    ]
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
   }

  ngOnInit(): void {
    this.currentImage = this.images[0]
  }

}
