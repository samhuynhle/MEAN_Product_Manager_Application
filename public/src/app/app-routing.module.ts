import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CreateproductComponent } from './createproduct/createproduct.component';


const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'productlist', component: ProductlistComponent },
  { path: 'productcreation', component: CreateproductComponent },
  { path: 'editproduct/:id', component: EditproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
