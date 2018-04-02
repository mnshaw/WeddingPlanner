import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-vendordetails",
  templateUrl: "vendordetails.html"
})
export class VendorDetailsPage {
  public vendor: any;
  public location: any;
  public isSaved: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vendor = navParams.data.vendor;
    this.isSaved = navParams.data.isSaved;
    this.location = this.vendor.venue.location;

    console.log(this.vendor);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad VendorpagePage");
  }
}
