import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signUp: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { 

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

  public goLogInPage(): void{
    console.log(this.signUp.getRawValue());
    this.router.navigate(['login']);
  }
}
