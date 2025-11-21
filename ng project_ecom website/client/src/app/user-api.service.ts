import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  api_link="http://localhost:8000"
  private _http=inject(HttpClient)

  getAllCategory(){
    return this._http.get(`${this.api_link}/category`)
      
      }

      getProductByCategoryId(id:any){
      return this._http.get(`${this.api_link}/product/category/`)
      }
}
