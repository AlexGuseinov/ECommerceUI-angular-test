import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { SpinnerTypeEnum } from 'src/app/base/enums/spinner-type-enum';
import { CreateProduct } from 'src/app/contracts/create-product';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { MessageTypeEnum } from 'src/app/services/admin/enums/alertify-message-type-enum';
import { ALertifyPositionEnum } from 'src/app/services/admin/enums/alertify-position-type-enum';
import { ProductService } from 'src/app/services/common/models/product-service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private productService: ProductService,
    private alertify:AlertifyService
  ) {
    super(spinner);
  }

  ngOnInit(): void {}

  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.showSpinner(SpinnerTypeEnum.BallAtom);
    const createProduct: CreateProduct = new CreateProduct();
    createProduct.name = name.value;
    createProduct.stock = parseInt(stock.value);
    createProduct.price = parseFloat(price.value);

    this.productService.createProduct(createProduct, () =>{
      this.hideSpinner(SpinnerTypeEnum.BallAtom);
      this.alertify.message("successfully added", {
        dissmissOthers:true,
        messageType:MessageTypeEnum.Success,
        position:ALertifyPositionEnum.BottomRight
      });
    }, errorMessage => {
      this.alertify.message(errorMessage,{
        dissmissOthers: true,
        messageType: MessageTypeEnum.Error,
        position: ALertifyPositionEnum.BottomRight
      });
    }
      
    );
  }
}
