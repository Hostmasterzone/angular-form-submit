import { Directive, Input, OnChanges, SimpleChanges, HostListener, HostBinding } from '@angular/core';
import { AppFormGroup } from './form-group.class';

@Directive({ selector: '[formGroup]' })
export class AppFormGroupDirective implements OnChanges {

    @Input() formGroup: AppFormGroup;
    @HostBinding('class.error') hasError = false;
    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.formGroup && changes.formGroup.firstChange) {
            this.formGroup.submitted = false;
        }
    }

    @HostListener('submit')
    onSubmit() {
        this.formGroup.submitted = true;
        this.hasError = this.formGroup.invalid;
    }

    @HostListener('reset')
    onReset() {
        this.formGroup.submitted = false;
        this.hasError = false;
    }
}
