import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from './../../core/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signUp: FormGroup;
  public usersData: Object;
  

  constructor(private router: Router, private formBuilder: FormBuilder,
    private userService: UserService) { 

    this.signUp = formBuilder.group({

      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],           
      confirmPassword: new FormControl('', [Validators.required]),
    }, {
      validators: this.ConfirmedValidator('password', 'confirmPassword'),
    })
  }

  ConfirmedValidator(controlName: string , matchingControlName: string){
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({confirmedValidator: true })
      }else{
        matchingControl.setErrors(null);
      }
    }
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.signUp.controls; }

  public goLogInPage(): any{
    this.userService.register(this.signUp.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.router.navigate(['login']);
                });
    /* this.usersData = this.signUp.getRawValue();
    localStorage.setItem('usersData', JSON.stringify(this.usersData));
     */
  }
}
