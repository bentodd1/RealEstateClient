import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MarketDetailPage} from "../market-detail/market-detail";
import {RealEstateProvider} from "../../providers/realEstate";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pageTitle = 'Market Health';
  _markets = [
    {
      city:'Kansas City',
      zip:'64109',
      health:6.4
    },
    {
      city:'Kansas City',
      zip:'64110',
      health:8
    },
    {
      city:'Kansas City',
      zip:'64134',
      health:4
    },
    {
      city:'Kansas City',
      zip:'64155',
      health:86.1
    },
    {
      city:'Kansas City',
      zip:'64196',
      health:8.4
    },
    {
      city:'Overland Park',
      zip:'66207',
      health:5.1
    },
    {
      city:'Overland Park',
      zip:'66221',
      health:3
    },
    {
      city:'Overland Parky',
      zip:'66283',
      health:7
    }
  ];
  markets = [];
  constructor(public navCtrl: NavController) {
    this.initializeItems();
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
    this.markets = this.RealEstateProvider.getAllRealEstate();
  }

}
