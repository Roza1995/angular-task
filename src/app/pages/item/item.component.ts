import { Component, OnInit } from '@angular/core';
import { DataService } from './../../core/services/data.service';
import { Product } from './../../core/models/product';
import { Images} from '../../core/models';
import { ActivatedRoute} from '@angular/router';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public product: Product;
  public images: Images;
  // public  slides = [{'image': 'assets/images/model_1_bg.jpg'}, {'image': 'assets/images/model_2_bg.jpg'},{'image': 'assets/images/model_3_bg.jpg'}];

  constructor(private activateRoute: ActivatedRoute,
              private dataService: DataService ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .subscribe( data => {
        this.dataService.getProductById(data.id)
          .subscribe(product => {
            this.product = product;
          });
      });

  }




}
