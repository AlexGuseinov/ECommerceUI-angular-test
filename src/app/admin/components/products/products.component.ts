import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { SpinnerTypeEnum } from 'src/app/base/enums/spinner-type-enum';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService, private httpClientService:HttpClientService){
    super(spinner);
  }


  ngOnInit(): void {
    this.showSpinner(SpinnerTypeEnum.BallAtom);

    this.httpClientService.get({controller:"product"}).subscribe(data => console.log(data));
    
    this.httpClientService.post({
      controller:"products"
    }, {
      name:"pen",
      stock:12,
      price:100
    })
  }

}
