import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-icons',
  templateUrl: './category-icons.component.html',
  styleUrls: ['./category-icons.component.scss']
})
export class CategoryIconsComponent implements OnInit {

  constructor() { }
  linkRouter=
  [
    "breakfast",
    "lunch",
    "dinner",
    "desserts",
    "beverage",
  ]
  src = [
    "https://img.icons8.com/ios/100/000000/sandwich-with-fried-egg.png",
    "https://img.icons8.com/ios/100/000000/hamburger.png",
    "https://img.icons8.com/ios/100/000000/meal.png",
    "https://img.icons8.com/ios/100/000000/cheesecake.png",
    "https://img.icons8.com/ios/100/000000/tea--v1.png",

  ]
  title = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desserts",
    "Beverage",
  ]

  ngOnInit(): void {
  }

}