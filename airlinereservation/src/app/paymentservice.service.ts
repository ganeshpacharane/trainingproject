import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  constructor(private http:HttpClient) { }

  public paymentFlightDetails(payment:Payment):Observable<any>{
     return this.http.post<any>("http://localhost:8082/paymentDetails",payment)

  }
}
