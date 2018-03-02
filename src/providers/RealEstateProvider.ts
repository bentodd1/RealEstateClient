import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the RealEstate provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RealEstateProvider {
  session:any;
  constructor(public http: HttpClient) {
  }

  login(body){
   return this.http.post('https://mentr.msts.com/api/users/auth', body, {headers: new HttpHeaders({"Content-Type":"application/json"})})
  }
  startSession(session){
    this.session = session;
    console.log("Starting session with " + JSON.stringify(this.session));
  }
  register(body){
    return this.http.post('https://mentr.msts.com/api/users/register', body, {headers: new HttpHeaders({"Content-Type":"application/json"})})
  }

  getRealEstateById(id) {
    return this.http.get('http://ec2-34-216-65-142.us-west-2.compute.amazonaws.com:5000/market/' + id )
  }

  getRealEstateByState(state){
    return this.http.get('http://ec2-34-216-65-142.us-west-2.compute.amazonaws.com:5000/market/state/' + state )
  }

  getRealEstateByMetro(metro){
  	return this.http.get('http://ec2-34-216-65-142.us-west-2.compute.amazonaws.com:5000/market/metro/' + metro)
  }

}
