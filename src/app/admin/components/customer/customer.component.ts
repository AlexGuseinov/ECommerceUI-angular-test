import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent } from 'src/app/base/base.component';
import { SpinnerTypeEnum } from 'src/app/base/enums/spinner-type-enum';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent implements OnInit{

  constructor(spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void {
      this.showSpinner(SpinnerTypeEnum.BallAtom);
  }

}
