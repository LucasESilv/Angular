import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  size = 40;
  font = 'arial';
  color = 'red';

  classes = ['green-title', 'small-title'];
  
  underline = 'unferline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
