import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {
 
 
  formData = { emailId: undefined ,mobileNo:undefined,date:undefined,noOfPerson:undefined}; 
 
  constructor(private service:BookingServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  bookTicket(){
    this.service.bookingFlightRemote(this.formData).subscribe(
      data=> {console.log("data inserted")
      this.router.navigate(['/cancelbooking'])
      
      },
      error => console.log("Error occured")
      
    )
  
  }

 

}
