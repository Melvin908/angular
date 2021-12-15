import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { ProductsComponent } from '../products/products.component';
import { AddproductComponent } from '../addproduct/addproduct.component';

const routes: Routes=[

  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:UserComponent,
    path:'user'
  },
  {
    component:ProductsComponent,
    path:'products'
  },
  {
    component:AddproductComponent,
    path:'addpro'
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }


]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[
    RouterModule

  ]
})
export class AppRoutingModuleModule { 
  constructor(private route:Router) { }
  
  openProducts()
  {
    this.route.navigate(['products']);
  }
  openHome(){
    this.route.navigate(['home']);
  }

  openAbout(){
    this.route.navigate(['about']);
  }
}