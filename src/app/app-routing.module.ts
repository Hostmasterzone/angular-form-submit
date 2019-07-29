import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
{
  path: '',
  redirectTo : 'personal',
  pathMatch : 'full'
},
{
  path : 'personal',
  component: PersonalComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'payment',
  component: PaymentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
