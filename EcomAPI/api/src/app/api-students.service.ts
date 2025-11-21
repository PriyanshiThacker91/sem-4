import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentsService {

  constructor(private _http:HttpClient) {}
    apiURL="https://67b2c094bc0165def8ce6618.mockapi.io/EcommerceAPI"
    getAll(){
      return this._http.get(this.apiURL)
    }

    getById(id:number){
      return this._http.get(this.apiURL+"/"+id)
    }

   deleteAll(id:number){
    return this._http.delete(this.apiURL+"/"+id)
   }
   insert(data:any){
    return this._http.post(this.apiURL,data)
   }

   edit(id:any,obj:any){
    return this._http.put(this.apiURL+'/'+id,obj)
   }
   }

