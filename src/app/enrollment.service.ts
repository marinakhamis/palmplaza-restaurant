import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { BookingFormData } from './BookingFormData';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private http:HttpClient) { }

  _url="http://localhost:3000/enroll";

   enroll(BookingFormData:BookingFormData)
   {
     return this.http.post(this._url,BookingFormData);
   }
}
