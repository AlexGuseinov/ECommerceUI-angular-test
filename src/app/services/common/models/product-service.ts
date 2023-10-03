import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateProduct } from 'src/app/contracts/create-product';
import { HttpErrorResponse } from '@angular/common/http';
import { ListProduct } from 'src/app/contracts/list-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:HttpClientService) { }
  
  createProduct(product:CreateProduct , successCallBack?:() => void, errorCallBack?: (errorMessage:string) => void){  
      this.httpClientService.post({
        controller:"products"
      },product).subscribe(result => {
        successCallBack();
        alert("Success");
      },(errorResponse:HttpErrorResponse)=>{
          const _error: Array<{key: string, value:Array<string>}> = errorResponse.error;
          let message = "";
          _error.forEach((v, index)=>{
            v.value.forEach((_v, _index) =>{
              message+= `${_v}<br>`;
            });
          });
          errorCallBack(message);
      });
  }

  async read(successCallBack?: () => void,errorCallBack?:(errorMessage:string) => void): Promise<ListProduct[]> {
    const prosideData :Promise<ListProduct[]> = this.httpClientService.get<ListProduct[]>({
      controller:"products"
    }).toPromise();

    prosideData.then(d => successCallBack())
      .catch((errorResponse:HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await prosideData;
  }
  
}
