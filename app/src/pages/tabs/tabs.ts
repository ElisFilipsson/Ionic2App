import { Component } from '@angular/core';

import { SpotsPage } from '../spots/spots';
import { SightingPage } from '../sighting/sighting';
import { StarsPage } from '../stars/stars';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SpotsPage;
  tab2Root: any = SightingPage;
  tab3Root: any = StarsPage;

  constructor() {

  }
}
