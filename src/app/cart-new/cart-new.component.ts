import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart-new',
  templateUrl: './cart-new.component.html',
  styleUrls: ['./cart-new.component.scss']
})
export class CartNewComponent implements OnInit {
cart : any=[];
total=0;
  constructor(private cartSer:CartServiceService) { 
    this.cart= this.cartSer.items
    console.log(this.cart);
    
  }
  
  ngOnInit(): void {
  }

}


