import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppFormGroup } from '../shared/directives/form-group.class';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalComponent implements OnInit {

  public personalForm: AppFormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personalForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required]
    }
    );
  }


  public get hasFirstNameErrors(): boolean {
    const firstNameControl = this.personalForm.controls.firstName;

    return (this.personalForm.submitted && firstNameControl.invalid) ||
      (firstNameControl.touched && firstNameControl.invalid);

  }
  public get hasLastNameErrors(): boolean {
    const lastNameControl = this.personalForm.controls.lastName;

    return (this.personalForm.submitted && lastNameControl.invalid) ||
      (lastNameControl.touched && lastNameControl.invalid);

  }
  public get hasEmailErrors(): boolean {
    const emailControl = this.personalForm.controls.email;

    return (this.personalForm.submitted && emailControl.invalid) ||
      (emailControl.touched && emailControl.invalid);

  }
  public get hasPhoneErrors(): boolean {
    const phoneControl = this.personalForm.controls.phone;

    return (this.personalForm.submitted && phoneControl.invalid) ||
      (phoneControl.touched && phoneControl.invalid);

  }



}
