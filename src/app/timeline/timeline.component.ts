import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  youngImageObject = [{
    image: 'assets/papa_young/dada-dadi.jpg',
    thumbImage: 'assets/papa_young/dada-dadi.jpg',
    //title: 'ABC'
},{
    image: 'assets/papa_young/papa_young_1.jpg',
    thumbImage: 'assets/papa_young/papa_young_1.jpg',
    //title: 'ABC'
}, {
    image: 'assets/papa_young/papa_young_2.jpg',
    thumbImage: 'assets/papa_young/papa_young_2.jpg'
}, {
    image: 'assets/papa_young/papa_young_3.jpg',
    thumbImage: 'assets/papa_young/papa_young_3.jpg',
    //title: 'Example with title.'
},{
  image: 'assets/papa_young/papa_young_4.jpg',
  thumbImage: 'assets/papa_young/papa_young_4.jpg',
  //title: 'ABC'
},{
  image: 'assets/papa_young/papa_young_5.jpg',
  thumbImage: 'assets/papa_young/papa_young_5.jpg',
  //title: 'ABC'
},{
  image: 'assets/papa_young/papa_young_6.jpg',
  thumbImage: 'assets/papa_young/papa_young_6.jpg',
  //title: 'ABC'
},{
  image: 'assets/papa_young/papa_young_7.jpg',
  thumbImage: 'assets/papa_young/papa_young_7.jpg',
  //title: 'ABC'
}];

  joiningImageObject = [{
    image: 'assets/papa_joining/papa_joining_1.jpg',
    thumbImage: 'assets/papa_joining/papa_joining_1.jpg',
    //title: 'ABC'
}, {
    image: 'assets/papa_joining/papa_joining_2.jpg',
    thumbImage: 'assets/papa_joining/papa_joining_2.jpg'
}, {
    image: 'assets/papa_joining/papa_joining_3.jpg',
    thumbImage: 'assets/papa_joining/papa_joining_3.jpg',
    //title: 'Example with title.'
}, {
  image: 'assets/papa_joining/papa_joining_4.jpg',
  thumbImage: 'assets/papa_joining/papa_joining_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/papa_joining/papa_joining_5.jpg',
  thumbImage: 'assets/papa_joining/papa_joining_5.jpg',
  //title: 'Example with title.'
}];

marriageImageObject= [{
  image: 'assets/marriage/marriage_1.jpg',
  thumbImage: 'assets/marriage/marriage_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/marriage/marriage_2.jpg',
  thumbImage: 'assets/marriage/marriage_2.jpg'
}, {
  image: 'assets/marriage/marriage_3.jpg',
  thumbImage: 'assets/marriage/marriage_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/marriage/marriage_4.jpg',
  thumbImage: 'assets/marriage/marriage_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/marriage/marriage_5.jpg',
  thumbImage: 'assets/marriage/marriage_5.jpg',
  //title: 'Example with title.'
}];

suvigyaImageObject= [{
  image: 'assets/suvigya/suvigya_1.jpg',
  thumbImage: 'assets/suvigya/suvigya_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/suvigya/suvigya_2.jpg',
  thumbImage: 'assets/suvigya/suvigya_2.jpg'
}, {
  image: 'assets/suvigya/suvigya_3.jpg',
  thumbImage: 'assets/suvigya/suvigya_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suvigya/suvigya_4.jpg',
  thumbImage: 'assets/suvigya/suvigya_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suvigya/suvigya_5.jpg',
  thumbImage: 'assets/suvigya/suvigya_5.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suvigya/suvigya_6.jpg',
  thumbImage: 'assets/suvigya/suvigya_6.jpg',
  //title: 'Example with title.'
}];

sumitImageObject=[{
  image: 'assets/sumit/sumit_1.jpg',
  thumbImage: 'assets/sumit/sumit_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/sumit/sumit_2.jpg',
  thumbImage: 'assets/sumit/sumit_2.jpg'
}, {
  image: 'assets/sumit/sumit_3.jpg',
  thumbImage: 'assets/sumit/sumit_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/sumit/sumit_4.jpg',
  thumbImage: 'assets/sumit/sumit_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/sumit/sumit_5.jpg',
  thumbImage: 'assets/sumit/sumit_5.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/sumit/sumit_6.jpg',
  thumbImage: 'assets/sumit/sumit_6.jpg',
  //title: 'Example with title.'
}];

suyashImageObject=[{
  image: 'assets/suyash/suyash_1.jpg',
  thumbImage: 'assets/suyash/suyash_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/suyash/suyash_2.jpg',
  thumbImage: 'assets/suyash/suyash_2.jpg'
}, {
  image: 'assets/suyash/suyash_3.jpg',
  thumbImage: 'assets/suyash/suyash_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suyash/suyash_4.jpg',
  thumbImage: 'assets/suyash/suyash_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suyash/suyash_5.jpg',
  thumbImage: 'assets/suyash/suyash_5.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suyash/suyash_6.jpg',
  thumbImage: 'assets/suyash/suyash_6.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/suyash/suyash_7.jpg',
  thumbImage: 'assets/suyash/suyash_7.jpg',
  //title: 'Example with title.'
}];

carImageObject=[{
  image: 'assets/firstCar/firstCar_1.jpg',
  thumbImage: 'assets/firstCar/firstCar_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/firstCar/firstCar_2.jpg',
  thumbImage: 'assets/firstCar/firstCar_2.jpg'
}, {
  image: 'assets/firstCar/firstCar_3.jpg',
  thumbImage: 'assets/firstCar/firstCar_3.jpg'
}];

serviceImageObject=[{
  image: 'assets/Service/service_1.jpg',
  thumbImage: 'assets/Service/service_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/Service/service_2.jpg',
  thumbImage: 'assets/Service/service_2.jpg'
}, {
  image: 'assets/Service/service_3.jpg',
  thumbImage: 'assets/Service/service_3.jpg',
  //title: 'Example with title.'
},  {
  image: 'assets/Service/service_5.jpg',
  thumbImage: 'assets/Service/service_5.jpg',
  //title: 'Example with title.'
},{
  image: 'assets/Service/service_6.jpg',
  thumbImage: 'assets/Service/service_6.jpg',
  //title: 'ABC'
}, {
  image: 'assets/Service/service_7.jpg',
  thumbImage: 'assets/Service/service_7.jpg'
}, {
  image: 'assets/Service/service_8.jpg',
  thumbImage: 'assets/Service/service_8.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/Service/service_9.jpg',
  thumbImage: 'assets/Service/service_9.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/Service/service_10.jpg',
  thumbImage: 'assets/Service/service_10.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/Service/service_10.jpg',
  thumbImage: 'assets/Service/service_11.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/Service/service_10.jpg',
  thumbImage: 'assets/Service/service_12.jpg',
  //title: 'Example with title.'
}];

familyTripImageObject=[{
  image: 'assets/family_trips/family_trips_1.jpg',
  thumbImage: 'assets/family_trips/family_trips_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/family_trips/family_trips_2.jpg',
  thumbImage: 'assets/family_trips/family_trips_2.jpg'
}, {
  image: 'assets/family_trips/family_trips_3.jpg',
  thumbImage: 'assets/family_trips/family_trips_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips/family_trips_4.jpg',
  thumbImage: 'assets/family_trips/family_trips_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips/family_trips_5.jpg',
  thumbImage: 'assets/family_trips/family_trips_5.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips/family_trips_6.jpg',
  thumbImage: 'assets/family_trips/family_trips_6.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips/family_trips_7.jpg',
  thumbImage: 'assets/family_trips/family_trips_7.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips/family_trips_8.jpg',
  thumbImage: 'assets/family_trips/family_trips_8.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips/family_trips_9.jpg',
  thumbImage: 'assets/family_trips/family_trips_9.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips/family_trips_10.jpg',
  thumbImage: 'assets/family_trips/family_trips_10.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/family_trips/family_trips_11.jpg',
  thumbImage: 'assets/family_trips/family_trips_11.jpg',
  //title: 'Example with title.'
}];

additionsImageObject=[{
  image: 'assets/additions/additions_1.jpg',
  thumbImage: 'assets/additions/additions_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/additions/additions_2.jpg',
  thumbImage: 'assets/additions/additions_2.jpg'
}, {
  image: 'assets/additions/additions_3.jpg',
  thumbImage: 'assets/additions/additions_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/additions/additions_4.jpg',
  thumbImage: 'assets/additions/additions_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/additions/additions_5.jpg',
  thumbImage: 'assets/additions/additions_5.jpg',
  //title: 'Example with title.'
}];

euroTripImageObject=[{
  image: 'assets/euro_trip/euroTrip_1.jpg',
  thumbImage: 'assets/euro_trip/euroTrip_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/euro_trip/euroTrip_2.jpg',
  thumbImage: 'assets/euro_trip/euroTrip_2.jpg'
}, {
  image: 'assets/euro_trip/euroTrip_3.jpg',
  thumbImage: 'assets/euro_trip/euroTrip_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/euro_trip/euroTrip_4.jpg',
  thumbImage: 'assets/euro_trip/euroTrip_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/euro_trip/euroTrip_5.jpg',
  thumbImage: 'assets/euro_trip/euroTrip_5.jpg',
  //title: 'Example with title.'
}];

relativesImageObject=[{
  image: 'assets/relatives/relatives_1.jpg',
  thumbImage: 'assets/relatives/relatives_1.jpg',
  //title: 'ABC'
}, {
  image: 'assets/relatives/relatives_2.jpg',
  thumbImage: 'assets/relatives/relatives_2.jpg'
}, {
  image: 'assets/relatives/relatives_3.jpg',
  thumbImage: 'assets/relatives/relatives_3.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/relatives/relatives_4.jpg',
  thumbImage: 'assets/relatives/relatives_4.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/relatives/relatives_5.jpg',
  thumbImage: 'assets/relatives/relatives_5.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/relatives/relatives_6.jpg',
  thumbImage: 'assets/relatives/relatives_6.jpg',
  //title: 'Example with title.'
}, {
  image: 'assets/relatives/relatives_7.jpg',
  thumbImage: 'assets/relatives/relatives_7.jpg',
  //title: 'Example with title.'
}];

}
