import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-beverage',
  templateUrl: './beverage.component.html',
  styleUrls: ['./beverage.component.scss']
})
export class BeverageComponent implements OnInit {

    beverage:any=[]
  constructor( private cart:CartServiceService) {
    this.beverage = [
      {
        id: 17,
        src: "../../assets/beverage/watermelon-juice-fresh-800x800.png",
        
        title: 
        "waterelon juice",
        
        price: "45",
        
      },
      {
        id: 18,
        src: "../../assets/beverage/breakfast-hot-drink-with-orange-and-Oolong-tea-800x800.jpg",
        
        title: "lemon tea",
        
        price: "20",
        
      },
      {
        id: 19,
        src: "../../assets/beverage/moroccan_mojito-thumbnail-800x800.jpg",
        title: "mojito",
        price: "65",

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
