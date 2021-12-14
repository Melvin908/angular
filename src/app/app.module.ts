import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewModule } from './view/view.module';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';



@NgModule({
  imports:      
  [ BrowserModule,
    FormsModule,
    ViewModule ,
    AppRoutingModuleModule
    
   ],

  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
