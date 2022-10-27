import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
 
  formData = { cardNumber: undefined, cardHolderName:undefined, cardExMonth:undefined,cardExYear:undefined,cvv:undefined}; 
 
  constructor(private service:PaymentserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  paymentData(){
    this.service.paymentFlightDetails(this.formData).subscribe(
      data=> {console.log(" Payment data inserted")
      this.router.navigate([''])
      
      },
      error => console.log("Error occured")
      
    )
  
  }

}
