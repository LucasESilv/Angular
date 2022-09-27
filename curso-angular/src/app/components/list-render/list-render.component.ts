import { Component, OnInit } from '@angular/core';

import { airplanes } from 'src/app/Airplanes';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  airplanes: airplanes[] = [
    { model: 'a350', manu: 'Airbus', age: 5 },
    { model: 'b747', manu: 'Boeing', age:20},
    { model: 'e190E2', manu: 'Embraer', age:2},
    { model: 'an225', manu: 'Antonov', age:42}
  ]
  airplaneDetails = '';
  constructor() { }

  ngOnInit(): void {
  }
  showAir(airplanes: airplanes){
    this.airplaneDetails = `o avião ${airplanes.model} tem ${airplanes.age} anos`
  }
}
