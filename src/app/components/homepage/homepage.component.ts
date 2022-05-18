import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {
      img:'assets/img/IMG34.webp',
      text:'Special Offfer'
    },
    {
      img:'assets/img/IMG30.webp',
      text:'Watches For Men'
    },
    {
      img:'assets/img/IMG31.jpg',
      text:'Special Offfer'
    },
    {
      img:'assets/img/IMG32.webp',
      text:'Accessories'
    },
  ]

}
