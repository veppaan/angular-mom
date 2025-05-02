import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  imports: [FormsModule],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.scss'
})
export class CalculateComponent {
  //properties
  fahr: number = 0;
  cels: number = 0;
  resultTemp: number = 0;
  
  meter: number = 0;
  feet: number = 0;
  resultLength = 0;

  //methods
  fahrToCels(): void{
    this.resultTemp = (this.fahr - 32) / 1.8;
  }
  celsToFahr(): void{
    this.resultTemp = (this.cels * 1.8) + 32;
  }

  meterToFeet(): void{
    this.resultLength = this.meter * 3.28084;
  }
  feetToMeter(): void{
    this.resultLength = this.feet / 3.28084;
  }
}
