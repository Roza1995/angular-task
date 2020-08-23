import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public newPassword: FormGroup;
  
  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.newPassword = this.formBuilder.group({
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
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

  
  public saveNewPassword(): void {
    console.log(this.newPassword.getRawValue());
    this.router.navigate(['login']);
  }

}
