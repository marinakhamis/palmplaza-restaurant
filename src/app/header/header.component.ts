import { HostListener, Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

//   // Change the background color of NavBar onscroll
//   isScrolled: boolean = false;
//   @HostListener("window:scroll")
//   scrollEvent() {
//     window.pageYOffset >= 100 ? (this.isScrolled = true) : (this.isScrolled = false);
// }


//   // Show reserve component when "reservation" button is clicked 
//   // P.S: "reservation" button  is inside the Header component 
//   // That's why I'm using the "event emitter "

//   @Output() onReservationClick = new EventEmitter<boolean>();
//   reservationClick(){
//     this.onReservationClick.emit(true);
//   }


  constructor() { }

  ngOnInit(): void {
  }

}
