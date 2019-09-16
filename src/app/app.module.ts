import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentComponent } from './payment/payment.component';
import { AppFormGroupDirective } from './shared/directives/form-group.directive';
import { CanAccessDirective } from './shared/directives/can-access.directive';
import { AuthService } from './shared/auth.service';
import { RuleEngineService } from './shared/rule-engine.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ContactComponent,
    PaymentComponent,
    AppFormGroupDirective,
    CanAccessDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, RuleEngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
