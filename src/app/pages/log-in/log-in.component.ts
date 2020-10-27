import { AuthenticationService } from './../../core/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { faFacebook, faGoogle, faGithub} from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public signIn: FormGroup;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faGithub = faGithub;



  constructor(private router: Router, private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService) {

    this.signIn = formBuilder.group({

      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],           
   
    });
  }

  ngOnInit(): void {
  }

  // convenience getter for easy access to form fields
  get f() { return this.signIn.controls; }


  public goHomePage(): void{

    this.authenticationService.LogIn(this.f.email.value, this.f.password.value );

  }

  public getNewPassword(): void{
    this.router.navigate(['forgot-password']);
  }

}
