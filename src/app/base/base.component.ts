import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerTypeEnum } from './enums/spinner-type-enum';


export class BaseComponent{

  constructor(private spinner:NgxSpinnerService) {}
  
  showSpinner(type: SpinnerTypeEnum){
    this.spinner.show(type);
    setTimeout(() => this.hideSpinner(type),1000);
  }
  
  hideSpinner(type:SpinnerTypeEnum){
    this.spinner.hide(type);
  }

}
