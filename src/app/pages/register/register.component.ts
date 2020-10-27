import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from './../../core/services/authentication.service';
import {DataService} from '../../core/services';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DataService]
})
export class RegisterComponent implements OnInit {

  public signUp: FormGroup;
  

  constructor(private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService, private dataservice: DataService) {

    this.signUp = formBuilder.group({

      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],           
      confirmPassword: ['', [Validators.required]],
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
    this.register();
  }


  public register(): void {
    this.dataservice.register(this.signUp)
      .subscribe(data => this.signUp = data);
  }

  // convenience getter for easy access to form fields
  get f() { return this.signUp.controls; }

  public goLogInPage(): void{
    this.authenticationService.Register(this.f.email.value,this.f.password.value, );
    
  }
}
