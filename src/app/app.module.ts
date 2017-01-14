import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule, JsonpModule } from '@angular/http';
import { MyApp } from './app.component';
import { SightingPage } from '../pages/sighting/sighting';
import { StarsPage } from '../pages/stars/stars';
import { SpotsPage } from '../pages/spots/spots';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    SightingPage,
    SpotsPage,
    StarsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SightingPage,
    SpotsPage,
    StarsPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
