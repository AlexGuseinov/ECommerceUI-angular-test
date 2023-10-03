import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { SpinnerTypeEnum } from 'src/app/base/enums/spinner-type-enum';
import { ListProduct } from 'src/app/contracts/list-products';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { MessageTypeEnum } from 'src/app/services/admin/enums/alertify-message-type-enum';
import { ALertifyPositionEnum } from 'src/app/services/admin/enums/alertify-position-type-enum';
import { ProductService } from 'src/app/services/common/models/product-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit{
  constructor(spiner:NgxSpinnerService,private productService:ProductService,private alertService:AlertifyService){
    super(spiner);
  }

  displayedColumns: string[] = [ 'name', 'stock', 'price', 'createdDate','updatedDate'];
    dataSource:MatTableDataSource<ListProduct> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async ngOnInit() {
      this.showSpinner(SpinnerTypeEnum.BallAtom);
    const allProducts:ListProduct[] = await  this.productService.read(()=>this.hideSpinner(SpinnerTypeEnum.BallAtom),errorMessage=>
      this.alertService.message(errorMessage,{
        dissmissOthers:true,
        messageType: MessageTypeEnum.Error,
        position: ALertifyPositionEnum.TopRight
      }))
      this.dataSource = new MatTableDataSource<ListProduct>(allProducts);
  }

}
