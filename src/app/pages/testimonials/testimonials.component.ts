import { Component, OnInit } from '@angular/core';
import { Testimonials} from '../../core/models';
import { DataService } from '../../core/services';


@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  providers: [DataService]
})
export class TestimonialsComponent implements OnInit {

  public testimonials: Testimonials[] = [];
  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    this._getProducts();
  }

  private _getProducts(): void{
    this.dataservice.getTestimonials()
      .subscribe(data => this.testimonials = data);
  }



}
