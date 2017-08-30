import {Directive, HostBinding, Input} from '@angular/core';
import {FormControl} from "@angular/forms";

@Directive({selector: '[validation-classes]'})
export class ValidationClassesDirective {
  @Input('validation-classes') control: FormControl;
  @HostBinding('class.has-errors') hasError;

  constructor() {}

  ngAfterViewInit() {
    this.control.statusChanges.subscribe(() => {
      this.hasError = (this.control.touched || this.control.dirty) && this.control.invalid;
    });
  }
}
