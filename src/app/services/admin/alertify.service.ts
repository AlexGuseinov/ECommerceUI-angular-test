import { Injectable } from '@angular/core';
import { AlertifyOptions } from './options/alertify-optionst';

declare var alertify:any;

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {
  constructor() { }

  // message( message : string, messageType : MessageTypeEnum, position:ALertifyPositionEnum,delay:number=1 ){
    message(message:string,options:Partial<AlertifyOptions>){
    alertify.set('notifier','delay', options.delay)
    alertify.set('notifier', 'position', options.position)
    alertify[options.messageType](message);
  }

  dismiss(){
    alertify.dismissAll();
  }

}


