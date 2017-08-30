import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {FormBuilder, Validators} from "@angular/forms";

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {ApplicationState} from "../../store/index";
import {Store} from "@ngrx/store";
import {TokenActions} from "../../store/token/actions";

@Component({
  selector: 'login',
  template: `
    <form novalidate [formGroup]="form" (ngSubmit)="submit$.next()">
      <div class="form-control">
        <label>Username:</label>
        <input type="text" formControlName="username" class="input">
      </div>

      <div class="form-control">
        <label>Password:</label>
        <input type="password" formControlName="password" class="input">
      </div>

      <footer>
        <button class="button button--success">Login</button>
      </footer>
    </form>
  `
})
export class LoginComponent implements OnInit {
  submit$ = new Subject<void>();

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
              private store: Store<ApplicationState>,
              private tokenActions: TokenActions) {
  }

  ngOnInit() {
    this.submit$
      .filter(() => this.form.valid)
      .debounceTime(500)
      .withLatestFrom(this.form.valueChanges)
      .map(([submit, formValues]) => formValues)
      .subscribe((values) => this.onSubmit(values));
  }

  private onSubmit(values: { username: string, password: string }) {
    this.store.dispatch(this.tokenActions.login(values));
  }
}
