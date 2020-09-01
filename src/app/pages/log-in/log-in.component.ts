import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public signIn: FormGroup;
  public userData: Object;

  constructor(private router: Router, private formBuilder: FormBuilder) { 

    this.signIn = formBuilder.group({

      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],           
   
    });
  }

  ngOnInit(): void {
  }

  public goHomePage(): any{
    this.userData = this.signIn.getRawValue();
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.router.navigate(['home']);
  }

  public getNewPassword(): void{
    this.router.navigate(['forgot-password']);
  }

}
