import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MarketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-market-detail',
  templateUrl: 'market-detail.html',
})
export class MarketDetailPage {
  pageTitle = 'Market Detail';
  market:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkParams();
    // this.market = {
    //   cbsa:'New York-Newark-Jersey City, NY-NJ-PA',
    //   size:0,
    //   health:9.3453524533,
    //   sfg:95.73,
    //   pf:1.0234,
    //   fr:0.0254,
    //   fyoy:0.038965,
    //   ne:0.067887,
    //   d:0.09989,
    //   dom:155
    // };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketDetailPage');
  }

  checkParams(){
    this.market = this.navParams.get('market');
    this.pageTitle = this.market._id;
  }

}
