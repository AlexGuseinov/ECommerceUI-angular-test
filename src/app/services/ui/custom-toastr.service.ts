import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastrMessageTypeEnum } from './enums/toastr-message-type-enum';
import { ToastrPositionTypeEnum } from './enums/toastr-position-type-enum';
import { ToastrOptions } from './options/toastr-options';

@Injectable({
  providedIn: 'root',
})
export class CustomToastrService {
  constructor(private toastr: ToastrService) {}

  message(
    message: string,
    title: string,
    toastrOptions:Partial<ToastrOptions>
  ) {
    this.toastr[toastrOptions.messageType](message, title,{
      positionClass:toastrOptions.position  
    });
  }
}
