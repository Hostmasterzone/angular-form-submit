import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AppFormGroup } from '../shared/directives/form-group.class';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  public contactForm: AppFormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      address : ['', Validators.required],
      apt : [''],
      state : ['', Validators.required],
      zip : ['', Validators.required]
    });
  }

  public get hasAddressErrors(): boolean {
    const formControl = this.contactForm.controls.address;
    return this.isFormFieldValid(formControl);
  }

  public get hasAptErrors(): boolean {
    const formControl = this.contactForm.controls.apt;
    return this.isFormFieldValid(formControl);
  }

  public get hasStateErrors(): boolean {
    const formControl = this.contactForm.controls.state;
    return this.isFormFieldValid(formControl);
  }

  public get hasZipErrors(): boolean {
    const formControl = this.contactForm.controls.zip;
    return this.isFormFieldValid(formControl);
  }

  private isFormFieldValid(formControl: AbstractControl): boolean {
    return (this.contactForm.submitted || formControl.touched) && formControl.invalid;
  }

}
