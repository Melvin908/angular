import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[];
  prodcat:string="";
  prodname:string="";

  constructor() { }

  addProduct(){
    this.products.push({name:this.prodcat,doj:this.prodname})
  }

  ngOnInit() {
  }

}