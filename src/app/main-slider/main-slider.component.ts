import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: 'assets/main/papa_mainSlide_7.jpg',
    thumbImage: 'assets/main/papa_mainSlide_7.jpg',
    //title: 'Example two with title.'
}, {
    image: 'assets/main/papa_mainSlide_8.jpg',
    thumbImage: 'assets/main/papa_mainSlide_8.jpg',
    //title: 'Example two with title.'
}, {
    image: 'assets/main/papa_mainSlide_6.jpg',
    thumbImage: 'assets/main/papa_mainSlide_6.jpg',
    //title: 'Example two with title.'
} ,{
    image: 'assets/main/papa_mainSlide_5.jpg',
    thumbImage: 'assets/main/papa_mainSlide_5.jpg',
    //title: 'ABC'
}, {
    image: 'assets/main/papa_mainSlide_2.jpg',
    thumbImage: 'assets/main/papa_mainSlide_2.jpg'
}, {
    image: 'assets/main/papa_mainSlide_3.jpg',
    thumbImage: 'assets/main/papa_mainSlide_3.jpg',
    //title: 'Example with title.'
},{
    image: 'assets/main/papa_mainSlide_4.jpg',
    thumbImage: 'assets/main/papa_mainSlide_4.jpg',
    //title: 'Hummingbirds are amazing creatures'
}, {
    image: 'assets/main/papa_mainSlide_1.jpg',
    thumbImage: 'assets/main/papa_mainSlide_1.jpg'
}];

}
