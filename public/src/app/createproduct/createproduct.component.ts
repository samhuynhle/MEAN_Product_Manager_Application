import { Component, OnInit, NgModule } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
@NgModule({
  imports: [FormsModule]
})
export class CreateproductComponent implements OnInit {
  formdata: any;
  success_message: any = '';
  error_message: any = '';
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.formdata = {
      title: '',
      price: 0,
      image_url: "https://www.modvellumclinical.com/wp-content/uploads/no-product-image.png"
    }
  }
  submit_form(){
    let observable = this._httpService.create(this.formdata);
    observable.subscribe((data) => {
      this.success_message = data;
      if (data['errors']){
        console.log("Error displayed!")
      } else {
        this._router.navigate(['/productlist'])
      }
    },
    (error) => {
      console.log("err", error);
      this.error_message = error;
    })
  }
}
