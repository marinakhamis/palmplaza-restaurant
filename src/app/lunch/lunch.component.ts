import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {
  lunchMeals: any = []
  constructor(private cart: CartServiceService) {
    this.lunchMeals = [
      {
        id: 5,
        src: "../../assets/lunch/shop-tab1-1.jpg",

        title: "Mexican rips",
        price: "90",

      },
      {
        id: 6,
        src: "../../assets/lunch/shop-tab11-1.jpg",

        title: "Juicy burger",

        price: "120",

      },
      {
        id: 7,
        src: "../../assets/lunch/shop-tab12-1.jpg",

        title: "Shawrma",

        price: "95",

      },
      {
        id: 8,
        src: "../../assets/lunch/pp-shop-tab3-500x752.jpg",

        title: "chicken rice",

        price: "155",

      },
      {
        id: 9,
        src: "../../assets/lunch/pp-shop-tab4-500x752.jpg",
        title: "french rice",

        price: "145",

      },
      {
        id: 10,
        src: "../../assets/lunch/shop-tab13-1.jpg",
        title: "indian shish",
        price: "125",
      }
    ]

  }

  ngOnInit(): void {
  }

  addToCart(id: any) {
    console.log("length", this.cart.items.length);
    console.log("id", id);
    if (this.cart.items.includes(id)) {
      let index = this.cart.items.indexOf(id)
      {
        if (index > -1) {
          this.cart.items.splice(index, 1)
          console.log("after deleting ", this.cart.items)
          console.log(this.cart.items.length);
        }
      }
    }
    else {
      this.cart.items.push(id)
      console.log("after pushing ", this.cart.items)
      console.log(this.cart.items.length);
    }


  }

}
