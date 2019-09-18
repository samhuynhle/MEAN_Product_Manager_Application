import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  all_products: any = [];
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    let observable = this._httpService.findall();
    observable.subscribe((data)=>{
      this.all_products = data;
    })
  }
  clickDelete(id){
    let observable = this._httpService.delete(id);
    observable.subscribe((data)=>{
      console.log(data, "delted!")
    });
    let observable2 = this._httpService.findall();
    observable2.subscribe((data)=>{
      this.all_products = data;
    })
  }
}
