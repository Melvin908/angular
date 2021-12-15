import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-birthday1',
  templateUrl: './hero-birthday1.component.html',
  styleUrls: ['./hero-birthday1.component.css']
})
export class HeroBirthday1Component implements OnInit {
  today=Date();
  title="angular"

  constructor() { }

  ngOnInit() {
  }

}