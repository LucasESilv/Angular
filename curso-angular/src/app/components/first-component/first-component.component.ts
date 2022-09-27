import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }
  
    name: string = 'Lucas';
    age: number = 20;
    job = 'Garoto de Programa';
    hobbies = ['jogar', 'viajar', 'assistir', 'sofrer programando']
    car = {
      name: "Rs6",
      year: 1900,
    }
  ngOnInit(): void {
  }

}
