import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from './../../core/services';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public signIn: FormGroup;
  public userData: Object;

  constructor(private router: Router, private formBuilder: FormBuilder,
    private authService: AuthService,) { 

    this.signIn = formBuilder.group({

      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],           
   
    });
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.signIn.controls; }

  public goHomePage(): any{
    this.authService.login(this.f.email.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                  this.router.navigate(['home']);
                });
    /* this.userData = this.signIn.getRawValue();
    localStorage.setItem('userData', JSON.stringify(this.userData)); */
    
    
  }

  public getNewPassword(): void{
    this.router.navigate(['forgot-password']);
  }

}
