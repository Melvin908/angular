import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';

const routes: Routes=[
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:UserComponent,
    path:'user'
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
export class AppRoutingModuleModule { }