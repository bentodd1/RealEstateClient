import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MarketDetailPageModule} from "../pages/market-detail/market-detail.module";
import {MarketDetailPage} from "../pages/market-detail/market-detail";
import { RealEstateProvider } from '../providers/real-estate/real-estate';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    MarketDetailPageModule,
      HttpClientModule,
    IonicModule.forRoot(MyApp, {
      preloadModule:false,
      mode:'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MarketDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      RealEstateProvider,
    RealEstateProvider,
    RealEstateProvider
  ]
})
export class AppModule {}
