import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { AppFormGroup } from '../shared/directives/form-group.class';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {

  public paymentForm: AppFormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      cardnumber: ['', Validators.required],
      cvc: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    });
  }

  public get hasCardNumberErrors(): boolean {
    const formControl = this.paymentForm.controls.cardnumber;
    return this.isFormFieldValid(formControl);
  }

  public get hasCvcErrors(): boolean {
    const formControl = this.paymentForm.controls.cvc;
    return this.isFormFieldValid(formControl);
  }

  public get hasMonthErrors(): boolean {
    const formControl = this.paymentForm.controls.month;
    return this.isFormFieldValid(formControl);
  }

  public get hasYearErrors(): boolean {
    const formControl = this.paymentForm.controls.year;
    return this.isFormFieldValid(formControl);
  }

  private isFormFieldValid(formControl: AbstractControl): boolean {
    return (this.paymentForm.submitted || formControl.touched) && formControl.invalid;
  }

}
