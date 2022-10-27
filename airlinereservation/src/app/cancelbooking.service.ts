import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CancelbookingService {

  baseUrl:string = 'http://localhost:8082/deleteBookingt';

  constructor(private http:HttpClient) { }

  public deletebookingFlightRemote(bookId :any):Observable<any>{
     return this.http.delete("http://localhost:8082/deleteBooking/"+bookId);

  }

}
