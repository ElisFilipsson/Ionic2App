import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-sighting',
  templateUrl: 'sighting.html'
})
export class SightingPage {

  private posts: any; // <- I've added the private keyword 
  private searchQuery: string = '';
  private items: any; // <- items property is now of the same type as posts
  constructor(public navCtrl: NavController, private http: Http, public loadingCtrl: LoadingController) {

    // this.initializeItems(); <- you don't need this anymore

    // Show the loading message
    let loading = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500
    });
    loading.present();

    this.http.get('../assets/jsonfile/log.json').map(res => res.json()).subscribe(data => {
        this.posts = data;
        this.initializeItems();

        // Hide the loading message
        loading.dismiss();
    });
  }

  initializeItems() {
    this.items = this.posts;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
