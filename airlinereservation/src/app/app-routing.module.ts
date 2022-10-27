import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:'bookingflight',component:BookingComponent},
  {path:'cancelbooking',component:PaymentComponent},
  {path:'cancelbookingflight',component:CancelbookingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
