import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {




  dinnerMeals: any = []
  constructor( private cart:CartServiceService) {

    this.dinnerMeals = [
      {
        id: 11,
        src: "../../assets/dinner/shop-tab5-1.jpg",


        title: "mini steak",

        price: "125",


      },
      {
        id: 12,
        src: "../../assets/dinner/pp-shop-tab8-500x752.jpg",


        title: "kebda-liver",


        price: "45",


      },
      {
        id: 13,
        src: "../../assets/dinner/pp-m_item51-500x750.jpg",

        title: "chicken Pizza",
        price: "110",

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
