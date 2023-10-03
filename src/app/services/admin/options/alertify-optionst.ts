import { MessageTypeEnum } from "../enums/alertify-message-type-enum";
import { ALertifyPositionEnum } from "../enums/alertify-position-type-enum";



export class AlertifyOptions{
    messageType:MessageTypeEnum = MessageTypeEnum.Message ;
    position:ALertifyPositionEnum = ALertifyPositionEnum.BottomRight;
    delay:number = 3;
    dissmissOthers:boolean = false;
}