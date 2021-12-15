import { Component, VERSION } from '@angular/core';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 

  constructor(
     private routes:AppRoutingModuleModule
  ) {}

  products(){
    this.routes.openProducts();
  }
  home(){
    this.routes.openHome();
  }
}



