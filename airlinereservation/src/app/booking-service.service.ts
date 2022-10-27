import { Injectable } from '@angular/core';
import { Book } from './book';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  constructor(private http:HttpClient) { }

  public bookingFlightRemote(book :Book):Observable<any>{
     return this.http.post<any>("http://localhost:8082/bookflight",book)

  }

  
}
