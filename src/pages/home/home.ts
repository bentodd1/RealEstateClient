import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MarketDetailPage} from "../market-detail/market-detail";
import {RealEstateProvider} from "../../providers/real-estate/real-estate";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageTitle = 'Market Health';
  _markets:any = [];
  markets:any = [];
  constructor(public navCtrl: NavController, public realEstateProvider:RealEstateProvider) {

    this.realEstateProvider.getAllRealEstate().subscribe((res)=>{
      this._markets = res["markets"];
      // console.log(JSON.stringify(res));
      this.initializeItems();
    })
  }

  goToDetail(market:any){
    this.navCtrl.push(MarketDetailPage, {market:market});
  }

  getSearchResults(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.markets = this._markets.filter((market) => {
          return (market.city.toLowerCase().indexOf(val.toLowerCase()) > -1 || market.zip.toLowerCase().indexOf(val.toLowerCase()) > -1 );
        });
      }
  }
//TODO get this right
  initializeItems() {
      this.markets = this._markets;
  }

}
