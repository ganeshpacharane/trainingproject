import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CancelbookingService } from '../cancelbooking.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.sass']
})
export class CancelbookingComponent implements OnInit {
  public userForm:FormGroup; 
  bookId: number;  
  message = '';

  constructor(private router:Router,
    private route:ActivatedRoute,private cancelService:CancelbookingService, private fb: FormBuilder) {
      this.userForm = this.fb.group({
        
      });
     }

  

  ngOnInit(): void {
    this.message='';
    
    
  }

  
  cancelbookTicket(){
    
    this.cancelService.deletebookingFlightRemote(this.bookId).subscribe(
      responce => {
        console.log("Booking Cancellation successfully")
      this.message = 'We have received your cancellation request Successfully';
      },
      error => {
        console.log("Error occured");
        console.log(error);
        this.message = 'Invalid Booking Id Please checked !!!'
      }
      
    )
  
  }

  

}
