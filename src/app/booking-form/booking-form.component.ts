import { Component, OnInit } from '@angular/core';
import { BookingFormData } from '../BookingFormData';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.sass']
})
export class BookingFormComponent implements OnInit {

  constructor(private enrollment:EnrollmentService) { }
  BookingFormData: BookingFormData=new BookingFormData("Your Name","Your Email","Your Phone","Seats","Time","Date","Leave Your Message");
  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log(this.BookingFormData);
    this.enrollment.enroll(this.BookingFormData).subscribe(res=>
      {
        console.log("success",res);
      },
      error=>
      {
       console.log("error",error);
      })

  }
}
