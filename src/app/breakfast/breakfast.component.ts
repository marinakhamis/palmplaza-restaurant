import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})
export class BreakfastComponent implements OnInit {

  breakFastMeals: any = [];

  constructor(public cart: CartServiceService) {
    this.breakFastMeals = [
      {
        id: 1,
        src: "../../assets/breakfast/shop-tab7-1.jpg",
        title: "ultimate cheese",
        price: "60",
      },
      {
        id: 2,
        src: "../../assets/breakfast/shop-tab10-1.jpg",
        title: "light steaks",
        price: "95",
      },
      {
        id: 3,
        src: "../../assets/breakfast/shop-tab14-1.jpg",
        title: "caesar salad",
        price: "110",
      },
      {
        id: 4,
        src: "../../assets/breakfast/pp-shop-tab9-500x752.jpg",
        title: "caesar salad",
        price: "95",
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
