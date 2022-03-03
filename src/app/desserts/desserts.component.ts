import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit {

  desserts: any = []
  constructor(private cart: CartServiceService) {
    this.desserts = [
      {
        id: 14,
        src: "../../assets/desserts/desserts-simply-900x900-1.jpg",
        title: "cookies cream",
        price: "65",
      },
      {
        id: 15,
        src: "../../assets/desserts/800_vegan-gluten-free-fudge-brownie.jpg",
        title: "brownie cack",
        price: "80",
      },
      {
        id: 16,
        src: "../../assets/desserts/Featured-image-2.png",
        title: "eastern roll",
        price: "50",

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
