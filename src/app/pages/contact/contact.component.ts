import { FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactUs: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.contactUs = formBuilder.group({

      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(255)]],
    
    })
  }

  ngOnInit(): void {
  }

  public getDetails(): void {
    console.log(this.contactUs.getRawValue());
  }

}
