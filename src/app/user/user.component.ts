import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  memberData=[
    {name:'Peter', email:'peter@test.com'},
    {name:'Sam', email:'sam@test.com'},
    {name:'Abc', email:'abc@test.com'},
    {name:'Tony', email:'tony@test.com'}
  ]

  constructor() { }

  ngOnInit() {
  }

}