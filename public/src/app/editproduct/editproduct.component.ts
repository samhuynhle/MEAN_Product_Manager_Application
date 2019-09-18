import { Component, OnInit, NgModule } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
@NgModule({
  imports: [FormsModule]
})
export class EditproductComponent implements OnInit {
  shown_product: any = {}
  formdata: any = {}
  id: any;
  success_message: any = '';
  error_message: any = '';

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']
      this.shown_product = this.show_product(this.id)
    });
  }
  show_product(id){
    let observable = this._httpService.findone(id);
    observable.subscribe((data)=>{
      this.shown_product = data;
      this.formdata = this.shown_product;
    });
  }
  submit_form(){
    let observable = this._httpService.update(this.id, this.formdata);
    observable.subscribe((data)=>{
      this.success_message = data;
      console.log("updated?", data)
      if (data['errors']){
        console.log("Error displayed!")
      } else {
        this._router.navigate(['/productlist'])
      }
    })
  }
  goHome(){
    this._router.navigate(['/productlist']);
  }
}
